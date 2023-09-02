import { useNavigate } from 'react-router-dom';
import { logout } from '../api/services';
import { useEffect } from 'react';
import { useRef } from 'react';

export function Logout() {
	const navigate = useNavigate();

	const effectRun = useRef(false);
	useEffect(() => {
		(async () => {
			await logout();
			navigate('/login');
		})();
		return () => (effectRun.current = true);
	}, []);

	return <></>;
}
