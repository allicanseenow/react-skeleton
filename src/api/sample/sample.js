import axios from 'axios';
// import history from '../global/history';

const getSampleAPI = () => {
  return axios.get('/api/users?page=2');
};

export default {
  getSampleAPI,
};