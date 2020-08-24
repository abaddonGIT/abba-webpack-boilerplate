import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

import { HttpRequest } from './types';
import { DOMAIN } from './constants';

let axiosInstance: AxiosInstance;

export const getAxiosInstance = (): AxiosInstance => {
  if (axiosInstance) {
    return axiosInstance;
  }

  axiosInstance = axios.create({
    baseURL: `${DOMAIN}/api`,
    withCredentials: true,
  });
  axiosInstance.interceptors.response.use(handleSuccess, handleError);
  return axiosInstance;
};

export const handleSuccess = (response: AxiosResponse) => response;

export const handleError = (error: AxiosError) => {
  switch (error.response.status) {
    case 401:
      console.warn('Auth error!');
      break;
    case 404:
      console.warn('Not found 404');
      break;
    default:
      console.warn('Server error 500');
      break;
  }
  return Promise.reject(error);
};

export const httpRequest = ({
  responseType = 'json',
  host,
  cookies,
  cancelToken = null,
}: HttpRequest): AxiosInstance => {
  const headers: any = {};

  if (cookies) {
    headers.Cookie = cookies;
  }

  const instance = getAxiosInstance();

  if (host) {
    instance.defaults.baseURL = host;
  }

  if (cancelToken) {
    instance.defaults.cancelToken = cancelToken;
  }

  instance.defaults.responseType = responseType;
  instance.defaults.headers = headers;
  return instance;
};
