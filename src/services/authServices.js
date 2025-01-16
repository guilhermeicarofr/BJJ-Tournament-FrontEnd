import { api } from './api';

async function postSignUp({ body }) {
  const response = await api.post(`/auth/signup`, body);
  return response.data;
}

async function postSignIn({ body }) {
  const response = await api.post(`/auth/signin`, body);
  return response.data;
}

export {
  postSignIn,
  postSignUp
};
