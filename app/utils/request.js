import axios from 'axios';
import auth from './auth';

const get = (url, options = {}) => {
  const token = auth.getToken();

  return axios.get(url, {
    headers: {
      Authorization: token,
    },
    ...options,
  });
}

const del = (url, options = {}) => {
  const token = auth.getToken();

  return axios.get(url, {
    headers: {
      Authorization: token,
    },
    ...options,
  });
}

const post = (url, body = {}, options = {}) => {
  const token = auth.getToken();

  return axios.post(url, body, {
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
    ...options,
  });
}

const put = (url, body = {}, options = {}) => {
  const token = auth.getToken();

  return axios.put(url, body, {
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
    ...options,
  });
}

export {
  get,
  post,
  put,
  del,
};
