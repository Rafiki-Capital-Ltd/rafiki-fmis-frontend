import axios from 'axios';
import { BASE_URL } from './routes';

export const apiAuth = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
});
