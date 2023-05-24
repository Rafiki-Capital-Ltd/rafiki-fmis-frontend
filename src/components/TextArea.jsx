export function TextArea({ label, placeHolder, onChange, required, value }) {
	return (
		<div className='mb-3'>
			<label className='block mb-1 text-sm font-semibold  text-gray-600'>
				{label}
			</label>
			<textarea
				className='shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
				required={required}
				placeholder={placeHolder}
				onChange={onChange}
				value={value}
			></textarea>
		</div>
	);
}
