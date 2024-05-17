import { api } from './ApiService';

export const getCampers = ({ page, limit }) => {
  return api.get(`/campers?limit=${limit}&page=${page}`);
};
