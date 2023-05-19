import React from 'react';

export function InputElement({ label, type, placeHolder, onChange, required }) {
	return (
		<div className='mb-5'>
			<label className='block mb-1 text-sm font-semibold text-gray-900 '>
				{label}
			</label>
			<input
				type={type}
				className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
				placeholder={placeHolder}
				onChange={onChange}
				required={required}
			/>
		</div>
	);
}
