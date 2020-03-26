import {getLoginUrl, getApiBaseUrl, getBaseUrl} from './Config';

const axios = require('axios');

export const instance = axios.create({
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const verifyToken = async () => {
  try {
    return await instance({
      method: 'get',
      url: `${getApiBaseUrl()}/auth`,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const getBehov = async () => {
  if (1 === 2 && process.env.NODE_ENV === 'development') {
    try {
      return await instance({
        method: 'get',
        url: `${process.env.PUBLIC_URL}/__mocks__/mockInnsyn.json`,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  try {
    return await instance({
      method: 'get',
      url: `${getApiBaseUrl()}/behov`,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const redirectToLogin = () => {
  window.location.assign(`${getLoginUrl()}&redirect=${getBaseUrl()}?samtykke=true`); // eslint-disable-line no-undef
};

export default { getBehov, verifyToken, redirectToLogin };
