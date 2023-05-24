import { useState } from 'react';
import { InputElement } from '../InputElement';
import { TextArea } from '../TextArea';

export function ConsumptionForm({ onSubmit, data }) {
	const [date, setDate] = useState(data?.date);
	const [quantity, setQuantity] = useState(data?.quantity);
	const [description, setDescription] = useState(data?.description);

	return (
		<>
			<div className='grid grid-cols-6'>
				<div className='col-span-3 p-5'>
					<InputElement
						type='date'
						label='Date'
						placeHolder='Date'
						required={true}
						value={date}
						onChange={(e) => setDate(e.target.value)}
					/>
				</div>

				<div className='col-span-3 p-5'>
					<InputElement
						type='number'
						label='Quantity (Kgs)'
						placeHolder='Quantity (Kgs)'
						required={true}
						value={quantity}
						onChange={(e) => setQuantity(e.target.value)}
					/>
				</div>

				<div className='col-span-6 p-5'>
					<TextArea
						label='Description'
						placeHolder='Consumption description...'
						required={true}
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
			</div>
			<div className='text-right'>
				<button
					onClick={() => onSubmit({ date, description, quantity })}
					className='bg-green-500 rounded-full text-white px-4 py-2 text-lg shadow-md'
				>
					<p className='flex items-center'>Submit</p>
				</button>
			</div>
		</>
	);
}
