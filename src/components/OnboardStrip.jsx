import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getUserRolesCount } from '../api';

export function OnboardStrip() {
	const [count, setCounts] = useState();

	useEffect(() => {
		(async () => {
			const farmersCount = await getUserRolesCount('FARMER');
			setCounts(farmersCount);
		})();
	});

	return (
		<div className='absolute top-0 z-9999 flex items-center justify-center bg-amber-400 w-full text-gray-100 font-semibold'>
			Onboarded Farmers: <span className='ml-2 animate-pulse'>{count}</span>
		</div>
	);
}
