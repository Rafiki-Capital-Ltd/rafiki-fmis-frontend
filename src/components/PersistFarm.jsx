import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useFarmContext } from '../hooks';
import { useParams } from 'react-router-dom';
import { getFarm } from '../api';
import { useNavigate } from 'react-router-dom';
import { ProgressSpinner } from "primereact/progressspinner";

export function PersistFarm() {
	const [isLoading, setIsLoading] = useState(true);
	const { farm, setFarm } = useFarmContext();
	const { farmId } = useParams();

	const navaigate = useNavigate();

	useEffect(() => {
		let isMounted = true;

		const verifyFarm = async () => {
			try {
				const farm = await getFarm(farmId);
				if (!farm) navaigate('/farms');
				setFarm(farm);
			} catch (err) {
				navaigate('/farms');
			} finally {
				isMounted && setIsLoading(false);
			}
		};

		!farm?.id ? verifyFarm() : setIsLoading(false);

		return () => (isMounted = false);
	}, [farmId, getFarm]);

	return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen w-screen">
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
