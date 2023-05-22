import { useState } from 'react';
import { FarmContext } from '../FarmContext';

export function FarmProvider({ children }) {
	const [farm, setFarm] = useState({});

	return (
		<FarmContext.Provider value={{ farm, setFarm }}>
			{children}
		</FarmContext.Provider>
	);
}
