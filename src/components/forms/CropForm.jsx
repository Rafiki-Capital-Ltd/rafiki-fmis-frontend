import { useState } from 'react';
import { InputElement } from '../InputElement';
import { TextArea } from '../TextArea';

export function CropForm({ onSubmit, data }) {
	const [type, setType] = useState(data?.type);
	const [description, setDescription] = useState(data?.description);
	const [quantity, setQuantity] = useState(data?.quantity);

	return (
		<>
			<div className='grid grid-cols-6'>
				<div className='col-span-6 p-5'>
					<InputElement
						type='text'
						label='Type'
						placeHolder='Type of crop..'
						required={true}
						value={type}
						onChange={(e) => setType(e.target.value)}
					/>
				</div>

				<div className='col-span-6 p-5'>
					<TextArea
						label='Description'
						placeHolder='Crop description...'
						required={true}
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
				<div className='col-span-6 p-5'>
					<InputElement
						type='number'
						label='Acres Planted'
						placeHolder='Acres of crop planted...'
						required={true}
						value={quantity}
						onChange={(e) => setQuantity(e.target.value)}
					/>
				</div>
			</div>
			<div className='text-right'>
				<button
					onClick={() => onSubmit({ type, description, quantity })}
					className='bg-green-500 rounded-full text-white px-4 py-2 text-lg shadow-md'
				>
					<p className='flex items-center'>Submit</p>
				</button>
			</div>
		</>
	);
}
