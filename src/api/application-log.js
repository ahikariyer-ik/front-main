import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache, no-store, must-revalidate'
  }
});

export const createApplicationLog = async ({ jobListingId, applicantIP, additionalData }) => {
  try {
    const response = await apiClient.post('/api/application-logs', {
      data: {
        job_listing: jobListingId,
        applicantIP,
        additionalData,
      }
    });
    return response.data;
  } catch (error) {
    console.error('Başvuru logu oluşturulurken hata oluştu:', error);
    throw error;
  }
};