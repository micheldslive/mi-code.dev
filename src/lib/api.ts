import axios from 'axios';

const isProduction = process.env.NODE_ENV === 'production';
const base = isProduction
  ? 'https://micode-dev.vercel.app/api'
  : 'http://localhost:3000/api';

export const api = axios.create({
  baseURL: base
});