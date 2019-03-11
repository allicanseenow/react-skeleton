import axios from 'axios';

const apiDomain = process.env.REACT_APP_API_DOMAIN;

axios.defaults.baseURL = apiDomain;
axios.defaults.headers.common['Authorization'] = '';

export {
  apiDomain
};