import { useState } from 'react';
import { InputElement } from '../InputElement';
import { TextArea } from '../TextArea';

export function AssetForm({ onSubmit, data }) {
	const [type, setType] = useState(data?.type);
	const [description, setDescription] = useState(data?.description);
	const [storageLocation, setStorageLocation] = useState(data?.storageLocation);
	const [status, setStatus] = useState(data?.status);

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
					<InputElement
						type='text'
						label='Status'
						placeHolder='Status'
						required={true}
						value={status}
						onChange={(e) => setStatus(e.target.value)}
					/>
				</div>
			</div>
			<div className='text-right'>
				<button
					onClick={() =>
						onSubmit({ type, description, storageLocation, status })
					}
					className='bg-green-500 rounded-full text-white px-4 py-2 text-lg shadow-md'
				>
					<p className='flex items-center'> Create</p>
				</button>
			</div>
		</>
	);
}
