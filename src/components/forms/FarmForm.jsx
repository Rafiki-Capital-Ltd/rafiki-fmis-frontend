import { useState } from 'react';
import { InputElement } from '../InputElement';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useEffect } from 'react';
import { useApi } from '../../hooks';
import { useRef } from 'react';

export function FarmForm({ onSubmit, data }) {
	const [name, setName] = useState(data?.name);
	const [size, setSize] = useState(data?.size || 0);
	const [county, setCounty] = useState(data?.county);
	const [constituency, setConstituency] = useState(data?.constituency);
	const [subCounty, setSubCounty] = useState(data?.subCounty);
	const [counties, setCounties] = useState([]);
	const [constituencies, setConstituencies] = useState([]);
	const [subCounties, setSubCounties] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const api = useApi();

	const effectRun = useRef(false);
	useEffect(() => {
		if (!effectRun.current) {
			(async () => {
				try {
					const res = await api.get('/counties');
					setCounties(res.data?.content);
				} catch (error) {
					console.error(error);
				}
			})();
		}
		return () => (effectRun.current = true);
	}, []);

	useEffect(() => {
		(async () => {
			try {
				if (county?.id) {
					const res = await api.get('/constituencies', {
						params: { county: county?.id },
					});
					setConstituencies(res.data);
				}
			} catch (error) {
				console.error(error);
			}
		})();
		return () => true;
	}, [county]);

	useEffect(() => {
		(async () => {
			try {
				if (constituency?.id) {
					const res = await api.get('/subcounties', {
						params: { constituency: constituency?.id },
					});
					setSubCounties(res.data);
				}
			} catch (error) {
				console.error(error);
			}
		})();
		return () => true;
	}, [constituency]);

	return (
		<>
			<div className='grid grid-cols-6'>
				<div className='col-span-3 p-5'>
					<InputElement
						type='text'
						label='Farm Name'
						placeHolder='Farm Name'
						required={true}
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<div className='col-span-3 p-5'>
					<InputElement
						type='number'
						label='Size '
						placeHolder='size in Acerage'
						required={true}
						value={size}
						onChange={(e) => setSize(e.target.value)}
					/>
				</div>

				<div className='col-span-2 p-5'>
					<label className='block mb-1 text-sm font-semibold  text-gray-600'>
						County
					</label>
					<select
						className='shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
						name='counties'
						id='counties'
						value={county?.id}
						onChange={(e) => {
							setCounty(counties.find((county) => county.id == e.target.value));
						}}
					>
						{counties?.map((county, idx) => {
							return (
								<option key={idx} value={county?.id}>
									{county.name}
								</option>
							);
						})}
					</select>
				</div>

				<div className='col-span-2 p-5'>
					<label className='block mb-1 text-sm font-semibold  text-gray-600'>
						Constituency
					</label>
					<select
						className='shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
						name='constituencies'
						id='constituencies'
						value={constituency?.id}
						disabled={county?.id ? false : true}
						onChange={(e) =>
							setConstituency(
								constituencies.find(
									(constituency) => constituency.id == e.target.value
								)
							)
						}
					>
						{constituencies?.map((constituency, idx) => {
							return (
								<option key={idx} value={constituency.id}>
									{constituency.name}
								</option>
							);
						})}
					</select>
				</div>

				<div className='col-span-2 p-5'>
					<label className='block mb-1 text-sm font-semibold  text-gray-600'>
						Subcounty
					</label>
					<select
						className='shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
						name='subcounties'
						id='subcounties'
						value={subCounty?.id}
						disabled={constituency?.id ? false : true}
						onChange={(e) =>
							setSubCounty(
								subCounties.find((subCounty) => subCounty.id == e.target.value)
							)
						}
					>
						{subCounties?.map((subCounty, idx) => {
							return (
								<option key={idx} value={subCounty.id}>
									{subCounty.name}
								</option>
							);
						})}
					</select>
				</div>
			</div>
			<div className='text-right'>
				<button
					onClick={() => {
						setIsLoading(true),
							onSubmit({ name, size, county, constituency, subCounty });
					}}
					className='bg-green-500 rounded-full text-white px-4 py-2 text-lg shadow-md first-letter:'
				>
					{' '}
					<span className='flex gap-x-2'>
						{' '}
						{isLoading ? (
							<ProgressSpinner
								style={{ width: '20px', height: '30px' }}
								strokeWidth='8'
								fill='var(--surface-ground)'
								animationDuration='.5s'
								className='text-green-500'
							/>
						) : null}
						<p className='flex items-center'>Submit</p>
					</span>
				</button>
			</div>
		</>
	);
}
