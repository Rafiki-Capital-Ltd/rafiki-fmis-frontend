import { useState } from 'react';
import { InputElement } from '../InputElement';
import { TextArea } from '../TextArea';

export function SaleForm({ onSubmit, data }) {
	const [date, setDate] = useState(data?.date);
	const [type, setType] = useState(data?.type);
	const [quantity, setQuantity] = useState(data?.quantity);
	const [amount, setAmount] = useState(data?.amount);
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
						type='text'
						label='Type'
						placeHolder='Cash/Credit'
						required={true}
						value={type}
						onChange={(e) => setType(e.target.value)}
					/>
				</div>

				<div className='col-span-3 p-5'>
					<InputElement
						type='number'
						label='Quantity'
						placeHolder='Quantity'
						required={true}
						value={quantity}
						onChange={(e) => setQuantity(e.target.value)}
					/>
				</div>

				<div className='col-span-3 p-5'>
					<InputElement
						type='number'
						label='Amount'
						placeHolder='Amount'
						required={true}
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>
				</div>

				<div className='col-span-6 p-5'>
					<TextArea
						label='Description'
						placeHolder='Sale description...'
						required={true}
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
			</div>
			<div className='text-right'>
				<button
					onClick={() =>
						onSubmit({ date, type, quantity, amount, description })
					}
					className='bg-green-500 rounded-full text-white px-4 py-2 text-lg shadow-md'
				>
					<p className='flex items-center'>Submit</p>
				</button>
			</div>
		</>
	);
}
