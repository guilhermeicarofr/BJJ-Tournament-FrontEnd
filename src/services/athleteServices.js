import { api } from './api';

async function getAthleteInfo({ token }) {
  const response = await api.get(`/athlete/info`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return response.data;
}

async function postAthleteInfo({ token, body }) {
  const response = await api.post(`/athlete/info`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return response.data;
}

export {
  getAthleteInfo,
  postAthleteInfo
};
