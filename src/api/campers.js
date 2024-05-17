import { api } from './ApiService';

export const getCampers = async page => {
  const response = await api.get(`/campers?limit=4&page=${page}`);
  return response;
};
