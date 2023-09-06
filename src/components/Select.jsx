import { useState } from 'react';
import { useEffect } from 'react';

export function Select({
	label,
	placeHolder,
	required,
	name,
	id,
	value,
	options,
	onChange,
}) {
	return (
		<div className='mb-3'>
			<label className='block mb-1 text-sm font-semibold  text-gray-600'>
				{label}
			</label>
			<select
				className='shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
				name={name}
				id={id}
				value={value}
				onChange={onChange}
				required={required}
				defaultValue={value}
				disabled={!options.length && true}
			>
				<option value={null}>{placeHolder}</option>
				{options?.map((d, idx) => {
					return (
						<option key={idx} value={d?.id}>
							{d.name}
						</option>
					);
				})}
			</select>
		</div>
	);
}
