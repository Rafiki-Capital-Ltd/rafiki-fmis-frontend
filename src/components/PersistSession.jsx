import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuthContext, useRefreshToken } from '../hooks';

export function PersistSession() {
	const [isLoading, setIsLoading] = useState(true);
	const refresh = useRefreshToken();
	const { auth } = useAuthContext();

	useEffect(() => {
		let isMounted = true;

		const verifyRefreshToken = async () => {
			try {
				await refresh();
			} catch (err) {
				console.error(err);
			} finally {
				isMounted && setIsLoading(false);
			}
		};

		!auth ? verifyRefreshToken() : setIsLoading(false);

		return () => (isMounted = false);
	}, [auth, refresh]);

	return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
}
