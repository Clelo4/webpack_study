import axios from 'axios';

const service = axios.create({
  baseURL: process.env.BASE_URL,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout，
  withCredentials: true
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do somthing before request is sent
    // if (store.getters.token) {
    // let each request carry token
    // ['X-Token'] is a custom headers key
    // please modify it according to the actual situation
    // config.headers['x-token'] = getToken();
    // }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// reponse interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
