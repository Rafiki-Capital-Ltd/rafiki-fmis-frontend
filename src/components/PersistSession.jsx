import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuthContext, useRefreshToken } from '../hooks';
import { ProgressSpinner } from 'primereact/progressspinner';

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

	return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <ProgressSpinner
            style={{ width: "60px", height: "50px" }}
            strokeWidth="4"
            fill="var(--surface-ground)"
            animationDuration=".5s"
          />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
}
