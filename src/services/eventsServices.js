import { api } from './api';

async function getAllEvents({ filter }) {
  const response = await api.get(`/events/list?filter=${filter}`);
  return response.data;
}

async function getEvent({ eventId }) {
  const response = await api.get(`/events/open/${eventId}`);
  return response.data;
}

async function getEventCategories({ eventId }) {
  const response = await api.get(`/events/open/${eventId}/categories`);
  return response.data;
}

export {
  getAllEvents,
  getEvent,
  getEventCategories
};
