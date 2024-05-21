import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://6647202351e227f23ab12c58.mockapi.io/camp-test-app/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
