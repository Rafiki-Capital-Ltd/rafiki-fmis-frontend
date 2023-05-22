import { logout } from '../api';
import { useAuthContext } from './useAuthContext';

export function useLogout() {
	const { setAuth } = useAuthContext();

	return async () => {
		try {
			await logout();
			setAuth(null);
		} catch (error) {
			console.error(error);
		}
	};
}
