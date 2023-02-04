import { api } from './api';

async function getRegistrationInEvent({ token, eventId }) {
  const response = await api.get(`/registration/event/${eventId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return response.data;
}

async function postRegistrationInEvent({ token, absolute }) {
  const response = await api.post(`/registration/event/${eventId}?absolute=${absolute}`, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return response.data;
}

export {
  getRegistrationInEvent,
  postRegistrationInEvent,
};
