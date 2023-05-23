import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useFarmContext } from '../hooks';
import { useParams } from 'react-router-dom';
import { getFarm } from '../api';

export function PersistFarm() {
	const [isLoading, setIsLoading] = useState(true);
	const { farm, setFarm } = useFarmContext();
	const { farmId } = useParams();

	useEffect(() => {
		let isMounted = true;

		const verifyFarm = async () => {
			try {
				const farm = await getFarm(farmId);
				setFarm(farm);
			} catch (err) {
				console.error(err);
			} finally {
				isMounted && setIsLoading(false);
			}
		};

		!farm?.id ? verifyFarm() : setIsLoading(false);

		return () => (isMounted = false);
	}, [farmId, getFarm]);

	return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
}
