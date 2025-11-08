import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
  },
})

export const fetchCompanies = async ({ page = 1, pageSize = 12 }) => {
  try {
    const response = await apiClient.get('/api/company-profiles', {
      params: {
        'pagination[page]': page,
        'pagination[pageSize]': pageSize,
        'populate': ['logo', 'sector'],
      },
    })
    return {
      companies: response.data.data,
      pagination: response.data.meta.pagination,
    }
  } catch (error) {
    console.error('Şirketler getirilirken hata oluştu:', error)
    throw error
  }
}

export const fetchCompanyById = async (id) => {
  try {
    const response = await apiClient.get(`/api/company-profiles/public/${id}`, {
      params: {
        'populate': ['logo', 'sector', 'companyGallery'],
      },
    })
    return response.data.data
  } catch (error) {
    console.error('Şirket getirilirken hata oluştu:', error)
    return null
  }
}

export const fetchCompanyJobs = async (companyId) => {
  try {
    const response = await apiClient.get('/api/job-listings', {
      params: {
        'filters[company][id][$eq]': companyId,
        'filters[jobStatus][$eq]': 'Active',
        'populate': ['company'],
      },
    })
    return response.data.data
  } catch (error) {
    console.error('Şirket iş ilanları getirilirken hata oluştu:', error)
    return []
  }
}