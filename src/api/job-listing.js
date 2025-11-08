import axios from 'axios';
import dayjs from 'dayjs';
import 'dayjs/locale/tr';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
dayjs.locale('tr');

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache, no-store, must-revalidate'
  }
});

const formatRelativeTime = (date) => {
  const now = dayjs();
  const publishDate = dayjs(date);
  const diffInHours = now.diff(publishDate, 'hour');
  const diffInDays = now.diff(publishDate, 'day');
  const diffInWeeks = now.diff(publishDate, 'week');
  const diffInMonths = now.diff(publishDate, 'month');

  if (diffInHours < 24) {
    return publishDate.fromNow(); 
  } else if (diffInDays < 7) {
    return publishDate.fromNow(); 
  } else if (diffInWeeks < 4) {
    return publishDate.fromNow(); 
  } else {
    return publishDate.fromNow();
  }
};

const formatJobListing = (job) => {
  return {
    id: job.id,
    documentId: job.documentId,
    title: job.title,
    company: {
      name: job.company?.companyName || 'Belirtilmemiş',
      logo: job.company?.logo?.url || '/images/default-company-logo.png',
      sector: job.company?.sector?.name
    },
    location: `${job.city}${job.district ? `, ${job.district}` : ''}`,
    type: job.employmentType,
    posted: formatRelativeTime(job.publishedAt),
    image: job.company?.logo?.url || '/images/default-company-logo.png',
    profession: job.profession?.name,
    department: job.department?.name,
    work_mode: job.work_mode?.name,
    position: job.position?.name,
    details: {
      education: job.educationRequirement,
      age: `${job.minAge} - ${job.maxAge}`,
      gender: job.gender,
      disability_friendly: job.disabilityFriendly,
      contact: {
        email: job.contactEmail,
        phone: job.contactPhone
      },
      description: job.description?.replace(/<[^>]*>/g, ''),
      required_qualifications: job.requiredQualifications?.replace(/<[^>]*>/g, ''),
      job_nature: job.jobNature?.replace(/<[^>]*>/g, ''),
      publication_end_date: new Date(job.publicationEndDate).toLocaleDateString('tr-TR')
    }
  };
};

export const fetchFilterOptions = async () => {
  try {
    const [departments, workModes, positions] = await Promise.all([
      apiClient.get('/api/departments'),
      apiClient.get('/api/work-modes'),
      apiClient.get('/api/positions')
    ]);

    return {
      departments: departments.data.data,
      workModes: workModes.data.data,
      positions: positions.data.data,
      employmentTypes: ['Tam Zamanlı', 'Dönemsel', 'Yarı Zamanlı'],
      educationLevels: ['İlköğretim', 'Ortaöğretim', 'Lise', 'Lisans', 'Yüksek Lisans', 'Doktora'],
      genderOptions: ['Belirsiz', 'Erkek', 'Kadın', 'Farketmez']
    };
  } catch (error) {
    console.error('Filtre seçenekleri getirilirken hata oluştu:', error);
    throw error;
  }
};

export const fetchJobListings = async (filters = {}) => {
  try {
    const { 
      page = 1, 
      pageSize = 10, 
      search, 
      city,
      department,
      workMode,
      position,
      employmentType,
      educationRequirement,
      gender,
      disabilityFriendly,
      documentId 
    } = filters;
    
    const queryParams = new URLSearchParams({
      page: page.toString(),
      pageSize: pageSize.toString(),
      'filters[jobStatus][$eq]': 'Active'
    });

    if (documentId) queryParams.append('filters[documentId][$eq]', documentId);
    if (search) {
      queryParams.append('filters[$or][0][title][$containsi]', search);
      queryParams.append('filters[$or][1][company][companyName][$containsi]', search);
    }
    
    if (city) queryParams.append('filters[city][$eq]', city);
    if (department) queryParams.append('filters[department][id][$eq]', department);
    if (workMode) queryParams.append('filters[work_mode][id][$eq]', workMode);
    if (position) queryParams.append('filters[position][id][$eq]', position);
    if (employmentType) queryParams.append('filters[employmentType][$eq]', employmentType);
    if (educationRequirement) queryParams.append('filters[educationRequirement][$eq]', educationRequirement);
    if (gender) queryParams.append('filters[gender][$eq]', gender);
    if (disabilityFriendly !== undefined) queryParams.append('filters[disabilityFriendly][$eq]', disabilityFriendly);

    const response = await apiClient.get(`/api/job-listings?${queryParams.toString()}&populate=*`);
    
    return {
      data: response.data.data.map(formatJobListing),
      meta: response.data.meta
    };
  } catch (error) {
    console.error('İş ilanları getirilirken hata oluştu:', error);
    throw error;
  }
};