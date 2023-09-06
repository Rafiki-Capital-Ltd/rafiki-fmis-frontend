import { useState } from 'react';
import { InputElement } from '../InputElement';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Select } from '../Select';
import { getCounties, getConstituencies, getSubCounties } from '../../api';
import { toast } from 'react-toastify';

export function FarmForm({ onSubmit, data }) {
	const [name, setName] = useState(data?.name);
	const [size, setSize] = useState(data?.size || 0);
	const [county, setCounty] = useState(data?.county);
	const [constituency, setConstituency] = useState(data?.constituency);
	const [subCounty, setSubCounty] = useState(data?.subCounty);
	const [counties, setCounties] = useState([]);
	const [constituencies, setConstituencies] = useState([]);
	const [subCounties, setSubCounties] = useState([]);

	const effectRun = useRef(false);
	useEffect(() => {
		if (!effectRun.current) {
			(async () => {
				try {
					const data = await getCounties();
					setCounties(data);
				} catch (error) {
					toast.error('Failed to fetch counties!');
				}
			})();
		}
		return () => (effectRun.current = true);
	}, []);

	useEffect(() => {
		(async () => {
			try {
				const data = await getConstituencies({
					params: { county: county?.id },
				});
				setConstituencies(data);
			} catch (error) {
				toast.error('Failed to fetch constituencies!');
			}
		})();
		return () => true;
	}, [county]);

	useEffect(() => {
		(async () => {
			try {
				if (constituency?.id) {
					const data = await getSubCounties({
						params: { constituency: constituency?.id },
					});
					setSubCounties(data);
				}
			} catch (error) {
				toast.error('Failed to fetch sub counties!');
			}
		})();
		return () => false;
	}, [constituency]);

	return (
		<div className='my-4 w-full'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-x-6'>
				<InputElement
					type='text'
					label='Farm Name'
					placeHolder='Farm Name'
					required={true}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<InputElement
					type='number'
					label='Size'
					placeHolder='Size in acres'
					required={true}
					value={size}
					onChange={(e) => setSize(e.target.value)}
				/>
			</div>

			<div className='flex flex-col md:flex-row justify-between'>
				<Select
					id='county'
					name='county'
					label='County'
					placeHolder='-- Select County --'
					value={county?.id}
					onChange={(e) =>
						setCounty(counties.find((c) => c.id == e.target.value))
					}
					options={counties}
				/>
				<Select
					id='constituency'
					name='constituency'
					label='Constituency'
					placeHolder='-- Select Constituency --'
					value={constituency?.id}
					onChange={(e) =>
						setConstituency(constituencies.find((c) => c.id == e.target.value))
					}
					options={constituencies}
				/>
				<Select
					id='sub-county'
					name='sub-county'
					label='Sub County'
					placeHolder='-- Select Sub County --'
					value={subCounty?.id}
					onChange={(e) =>
						setSubCounty(subCounties.find((c) => c.id == e.target.value))
					}
					options={subCounties}
				/>
			</div>
			<div className='flex justify-between mt-5'>
				<button
					onClick={() => {
						onSubmit({ name, size, county, constituency, subCounty });
					}}
					className='text-white rounded-md w-full bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800'
				>
					Submit
				</button>
			</div>
		</div>
	);
}
