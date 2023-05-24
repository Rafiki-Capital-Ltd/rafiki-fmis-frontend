import { useState } from 'react';
import { InputElement } from '../InputElement';

export function FarmForm({ onSubmit }) {
	const [name, setName] = useState();
	const [size, setSize] = useState(0);
	const [county, setCounty] = useState();
	const [ward, setWard] = useState();

	return (
		<>
			<div className='grid grid-cols-6'>
				<div className='col-span-3 p-5'>
					<InputElement
						type='text'
						label='Farm Name'
						placeHolder='Farm Name'
						required={true}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<div className='col-span-3 p-5'>
					<InputElement
						type='number'
						label='Size '
						placeHolder='size in Acerage'
						required={true}
						onChange={(e) => setSize(e.target.value)}
					/>
				</div>
				<div className='col-span-3 p-5'>
					<InputElement
						type='text'
						label='County'
						placeHolder='County'
						required={true}
						onChange={(e) => setCounty(e.target.value)}
					/>
				</div>
				<div className='col-span-3 p-5'>
					<InputElement
						type='text'
						label='Ward'
						placeHolder='Ward'
						required={true}
						onChange={(e) => setWard(e.target.value)}
					/>
				</div>
			</div>
			<div className='text-right'>
				<button
					onClick={() => onSubmit({ name, size, county, ward })}
					className='bg-green-500 rounded-full text-white px-4 py-2 text-lg shadow-md'
				>
					<p className='flex items-center'> Create</p>
				</button>
			</div>
		</>
	);
}
