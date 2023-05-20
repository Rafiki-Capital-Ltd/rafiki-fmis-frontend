import axios from 'axios';
import { BASE_URL } from './routes';

export * from './routes';

export const api = axios.create({ baseURL: BASE_URL });

export const apiAuth = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
});

apiAuth.interceptors.request.use(
	(config) => {
		const accessToken = localStorage.getItem('accessToken');
		if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`;
		config.headers['Content-Type'] = 'application/json';
		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);
