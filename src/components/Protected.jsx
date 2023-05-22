import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuthContext } from '../hooks';
import { Outlet } from 'react-router-dom';

export function Protected() {
	const location = useLocation();
	const { auth } = useAuthContext();

	return (
		<>
			{auth ? (
				<Outlet />
			) : (
				<Navigate to='/login' state={{ from: location }} replace />
			)}
		</>
	);
}
