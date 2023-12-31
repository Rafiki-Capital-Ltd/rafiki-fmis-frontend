import { useState } from 'react';
import { InputElement } from '../InputElement';
import { TextArea } from '../TextArea';
import { ProgressSpinner } from 'primereact/progressspinner';

export function AssetForm({ onSubmit, data }) {
	const [type, setType] = useState(data?.type);
	const [description, setDescription] = useState(data?.description);
	const [storageLocation, setStorageLocation] = useState(data?.storageLocation);
	const [status, setStatus] = useState(data?.status);
	const [isLoading, setIsLoading] = useState(false);

	return (
		<>
			<div className='grid grid-cols-6'>
				<div className='col-span-6 p-5'>
					<InputElement
						type='text'
						label='Type'
						placeHolder='Type'
						required={true}
						value={type}
						onChange={(e) => setType(e.target.value)}
					/>
				</div>

				<div className='col-span-6 p-5'>
					<TextArea
						label='Description'
						placeHolder='Asset Description...'
						required={true}
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
				<div className='col-span-3 p-5'>
					<InputElement
						type='text'
						label='Storage Location'
						placeHolder='Storage Location'
						required={true}
						value={storageLocation}
						onChange={(e) => setStorageLocation(e.target.value)}
					/>
				</div>
				<div className='col-span-3 p-5'>
					<label className='block mb-1 text-sm font-semibold  text-gray-600'>
						Status
					</label>
					<select
						name='status'
						id='status'
						value={status}
						onChange={(e) => setStatus(e.target.value)}
						className='shadow-sm bg-gray-50 border text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
					>
						<option value={null} selected>
							-- Select Status --
						</option>
						<option value='FUNCTIONAL'>Functional</option>
						<option value='NON_FUNCTIONAL'>Non Functional</option>
					</select>
				</div>
			</div>
			<div className='text-right'>
				<button
					onClick={() => {
						setIsLoading(true),
							onSubmit({ type, description, storageLocation, status });
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
