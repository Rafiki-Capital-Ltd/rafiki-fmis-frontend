import { getAccessToken } from '../api';
import { useAuthContext } from './useAuthContext';

export function useRefreshToken() {
	const { setAuth } = useAuthContext();

	return async () => {
		const res = await getAccessToken();
		const accessToken = res.accessToken;
		localStorage.setItem('accessToken', accessToken);
		setAuth(res.user);
		return res.accessToken;
	};
}
