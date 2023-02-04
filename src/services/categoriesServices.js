import { api } from './api';

async function getCategoryAthletes({ categoryId }) {
  const response = await api.get(`/events/category/${categoryId}/athletes`);
  return response.data;
}

async function getCategoryFights({ categoryId }) {
  const response = await api.get(`/events/category/${categoryId}/fights`);
  return response.data;
}

async function getCategoryPodium({ categoryId }) {
  const response = await api.get(`/events/category/${categoryId}/podium`);
  return response.data;
}

export {
  getCategoryAthletes,
  getCategoryFights,
  getCategoryPodium
};
