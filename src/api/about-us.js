import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache, no-store, must-revalidate'
  }
});

export const fetchAboutPage = async () => {
  try {
    const response = await apiClient.get('/api/about-page?populate=*');
    return response.data?.data;
  } catch (error) {
    console.error('İletişim bilgileri getirilirken hata oluştu:', error);
    throw error;
  }
};
