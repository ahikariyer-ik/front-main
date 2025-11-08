import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
  },
})

export const fetchBlogPostList = async ({ page = 1, pageSize = 9 }) => {
  try {
    const response = await apiClient.get('/api/blog-posts', {
      params: {
        'pagination[page]': page,
        'pagination[pageSize]': pageSize,
        'populate': ['image'],
      },
    })
    return {
      blogs: response.data.data,
      pagination: response.data.meta.pagination,
    }
  } catch (error) {
    console.error('Bloglar getirilirken hata oluştu:', error)
    throw error
  }
}

export const fetchBlogPostById = async (id) => {
  try {
    const response = await apiClient.get(`/api/blog-posts/${id}`, {
      params: {
        'populate': ['image'],
      },
    })
    return response.data.data
  } catch (error) {
    console.error('Şirket getirilirken hata oluştu:', error)
    return null
  }
}