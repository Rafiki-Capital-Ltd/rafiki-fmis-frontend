import React from 'react';

const DashboardCard = ({ percentage, amount, text }) => {
	return (
		<div className='grid grid-row-4 shadow-md h-32 w-56 my-5 rounded-lg bg-white sm:m-3 lg:m-0 lg:my-5 '>
			<div className='row-span-1'>
				<div className='flex justify-end p-2 text-green-500 text-sm '>
					<i data-feather='chevron-up' className='text-xs '></i>
					<p className=''> {percentage} % </p>
				</div>
			</div>
			<div className='row-span-1'> </div>
			<div className='row-span-1'> </div>
			<div className='row-span-1'>
				<div className='flex flex-col justify-start p-2 '>
					<span className='text-3xl mb-1'>{amount}</span>{' '}
					<span className='text-md text-gray-400'>{text}</span>{' '}
				</div>
			</div>
		</div>
	);
};

export default DashboardCard;
