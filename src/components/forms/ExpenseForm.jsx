import { useState } from 'react';
import { InputElement } from '../InputElement';
import { TextArea } from '../TextArea';

export function ExpenseForm({ onSubmit, data }) {
	const [date, setDate] = useState(data?.date);
	const [type, setType] = useState(data?.type);
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
					<label className='block mb-1 text-sm font-semibold  text-gray-600'>
						Type
					</label>
					<select
						name='type'
						id='type'
						value={type}
						onChange={(e) => setType(e.target.value)}
						className='shadow-sm bg-gray-50 border text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
					>
						<option value={null} selected>
							-- Select Type --
						</option>
						<option value='RECURRING'>Recurring</option>
						<option value='ONE_TIME'>One Time</option>
					</select>
				</div>

				<div className='col-span-6 p-5'>
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
						placeHolder='Expense description...'
						required={true}
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
			</div>
			<div className='text-right'>
				<button
					onClick={() => onSubmit({ date, type, amount, description })}
					className='bg-green-500 rounded-full text-white px-4 py-2 text-lg shadow-md'
				>
					<p className='flex items-center'>Submit</p>
				</button>
			</div>
		</>
	);
}
