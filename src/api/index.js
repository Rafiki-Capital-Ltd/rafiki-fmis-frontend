import axios from 'axios';
import { BASE_URL } from './routes';

export const api = axios.create({ baseURL: BASE_URL });

export const apiAuth = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
});

export * from './routes';
