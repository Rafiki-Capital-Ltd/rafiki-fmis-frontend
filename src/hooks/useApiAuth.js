import { useEffect } from 'react';
import { apiAuth as api } from '../api';
import { useRefreshToken } from './useRefreshToken';

export function useApiAuth() {
	const refresh = useRefreshToken();

	useEffect(() => {
		const requestInterceptor = api.interceptors.request.use(
			(req) => {
				if (!req.headers['Authorization']) {
					const accessToken = localStorage.getItem('accessToken');
					req.headers['Authorization'] = `Bearer ${accessToken}`;
				}
				return req;
			},
			(error) => Promise.reject(error)
		);
		const responseInterceptor = api.interceptors.response.use(
			(res) => res,
			async (error) => {
				const prevRequest = error.config;

				if (error.response.status === 401 || !prevRequest.sent) {
					prevRequest.sent = true;
					const newAccessToken = await refresh();
					prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
					return api(prevRequest);
				}

				return Promise.reject(error);
			}
		);
		return () => {
			api.interceptors.request.eject(requestInterceptor);
			api.interceptors.response.eject(responseInterceptor);
		};
	}, [refresh]);

	return api;
}
