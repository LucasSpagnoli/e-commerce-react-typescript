import api from './api';

export const register = async (email: string, username: string, password: string) => {
  const { data } = await api.post('/auth/register', { email, username, password });
  localStorage.setItem('token', data.token);
  return data;
};

export const login = async (email: string, password: string) => {
  const { data } = await api.post('/auth/login', { email, password });
  localStorage.setItem('token', data.token);
  return data;
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const getUserData = async (token: string) => {
  const response = await api.get('auth/me', {
    headers: {Authorization: `Bearer ${token}`}
  });
  return response.data;
}