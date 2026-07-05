import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const analyzeDocument = async (file) => {
  const formData = new FormData();
  formData.append('document', file);

  const response = await axios.post(`${API_URL}/analyze`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};
