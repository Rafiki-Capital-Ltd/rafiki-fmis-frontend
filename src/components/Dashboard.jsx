import React from 'react';
import { data } from '../data';
import BarChart from './BarChart.jsx';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import DashboardCard from './DashboardCard';

function Dashboard() {
	const [open, setOpen] = useState(false);
	//   const { user, logout } = UserAuth();

	const [scanData, setScanData] = useState({
		labels: data.map((item) => item.month),
		datasets: [
			{
				label: 'Number of Scans',
				data: data.map((item) => item.amount),
				backgroundColor: ['green'],
			},
		],
	});
	const Navigate = useNavigate();

	useEffect(() => {
		feather.replace();
	});

	return (
		<>
			<div className=' flex-1  '>
				<div className='flex items-center justify-end relative  px-5 py-3'>
					<div
						className={` ${
							open ? 'hidden md:flex justify-end' : 'flex justify-end '
						}`}
					></div>
					<div
						className={` ${
							open ? ' hidden sm:inline' : ' inline '
						} text-md  text-gray-400 font-[13px] px-2 `}
					>
						{' '}
						test@test.com
					</div>
				</div>

				<div className=' bg-gray-100 pb-4'>
					<div
						className={` ${
							open ? ' hidden sm:flex ' : 'flex mx-5'
						} flex flex-row flex-wrap justify-around items-center`}
					>
						<DashboardCard percentage={7} amount={7} text='visits today' />
						<DashboardCard percentage={7} amount={7} text='visits this week' />
						<DashboardCard percentage={7} amount={7} text='visits this month' />
						<DashboardCard percentage={7} amount={7} text='visits this year' />
					</div>
					<div
						className={` ${
							open
								? 'hidden sm:flex sm:flex-wrap sm:justify-around'
								: ' flex flex-wrap justify-around '
						} `}
					>
						<div className={`${open ? '' : 'mx-10'} grid grid-cols-5 flex-1 `}>
							<div className='col-span-5 md:col-span-3 xs:h-32  bg-white shadow-md p-2 rounded-md'>
								<BarChart data={scanData} />
							</div>
							<div className='col-span-5  md:col-span-2 xs:h-32 ml-3 bg-white shadow-md p-2 rounded-md'>
								{/* <BarChart data={scanData} /> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Dashboard;
