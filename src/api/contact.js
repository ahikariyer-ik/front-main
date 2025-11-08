import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache, no-store, must-revalidate'
  }
});

export const fetchContactInfo = async () => {
  try {
    const response = await apiClient.get('/api/contacts/public');
    return response.data;
  } catch (error) {
    console.error('İletişim bilgileri getirilirken hata oluştu:', error);
    throw error;
  }
};

export const sendContactForm = async (formData) => {
  try {
    const response = await apiClient.post('/api/contact-forms', formData);
    return response.data;
  } catch (error) {
    console.error('Form gönderilirken hata oluştu:', error);
    throw error;
  }
}; 