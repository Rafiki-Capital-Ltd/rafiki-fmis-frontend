import axios from 'axios';
import { BASE_URL, REFRESH_TOKEN_ROUTE } from './routes';

const api = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
});

const excludedUrls = [
	'/auth/register',
	'/auth/login',
	'/auth/refresh',
	'/auth/logout',
];

api.interceptors.request.use(
	(req) => {
		if (!excludedUrls.includes(req.url)) {
			const accessToken = localStorage.getItem('accessToken');
			req.headers['Authorization'] = `Bearer ${accessToken}`;
		}
		return req;
	},
	(error) => Promise.reject(error)
);

api.interceptors.response.use(
	(res) => res,
	async (error) => {
		console.log(error);
		const prevRequest = error.config;
		if (
			!excludedUrls.includes(prevRequest.url) &&
			error.response?.status === 401
		) {
			try {
				const { accessToken } = (await api.post(REFRESH_TOKEN_ROUTE, {})).data;
				localStorage.setItem('accessToken', accessToken);
				prevRequest.headers['Authorization'] = `Bearer ${accessToken}`;
				return api(prevRequest);
			} catch (err) {
				return Promise.reject(err);
			}
		}
	}
);

export { api };
