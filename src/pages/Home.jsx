import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Home() {
	const navigate = useNavigate();

	useEffect(() => {
		navigate('/farms');
		return () => true;
	});

	return <h1>Home Page</h1>;
}
