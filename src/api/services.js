export const dynamic = 'force-dynamic';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const fetchServices = async () => {
  try {
    const response = await apiClient.get('/api/services');
    return response.data;
  } catch (error) {
    console.error('Servisler getirilirken hata oluştu:', error);
    throw error;
  }
};

export const fetchServiceBySlug = async (slug) => {
  try {
    const response = await apiClient.get(`/api/services/slug/${slug}`);
    return response.data;
  } catch (error) {
    console.error('Servis detayı getirilirken hata oluştu:', error);
    throw error;
  }
}; 