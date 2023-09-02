import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCashRegister, FaPlateWheat } from 'react-icons/fa6';
import { GiTakeMyMoney, GiPayMoney, GiWheat, GiCash } from 'react-icons/gi';
import { MdOutlineSell } from 'react-icons/md';

import { data } from '../data';
import {
	BarChart,
	DashboardCard,
	PieChart,
	TableComponent,
} from '../components';
import { useApi, useFarmContext } from '../hooks';
import {
	FARM_ASSETS_COUNT_ROUTE,
	FARM_CONSUMPTIONS_TOTAL_ROUTE,
	FARM_CONTEXT_ROUTE,
	FARM_PRODUCTIONS_TOTAL_ROUTE,
	FARM_SALES_TOTAL_ROUTE,
} from '../api';

export function Dashboard() {
	const [open, setOpen] = useState(false);
	const [pieChartData, setPieChartData] = useState({});
	const [barChartData, setBarChartData] = useState({});

	const [counts, setCounts] = useState({
		assets: 0,
		production: 0,
		sales: 0,
		consumption: 0,
	});

	const api = useApi();
	const { farm } = useFarmContext();

	const effectRun2 = useRef(false);
	useEffect(() => {
		if (!effectRun2.current) getCounts(farm.id);
		effectRun2.current = true;
		return () => effectRun2.current;
	}, [farm]);

	useEffect(() => {
		const documentStyle = getComputedStyle(document.documentElement);
		const pieData = {
			labels: ['Maize', 'Beans', 'Potatoes'],
			datasets: [
				{
					data: [540, 325, 702],
					backgroundColor: [
						documentStyle.getPropertyValue('--blue-500'),
						documentStyle.getPropertyValue('--yellow-500'),
						documentStyle.getPropertyValue('--green-500'),
					],
					hoverBackgroundColor: [
						documentStyle.getPropertyValue('--blue-400'),
						documentStyle.getPropertyValue('--yellow-400'),
						documentStyle.getPropertyValue('--green-400'),
					],
				},
			],
		};
		const barData = {
			labels: data.map((item) => item.month),
			datasets: [
				{
					label: 'Production in kgs',
					data: data.map((item) => item.amount),
					backgroundColor: [documentStyle.getPropertyValue('--green-500')],
					hoverBackgroundColor: [documentStyle.getPropertyValue('--green-400')],
				},
			],
		};
		setPieChartData(pieData);
		setBarChartData(barData);
		feather.replace();
	}, []);

	const getCounts = async (farmId) => {
		try {
			const assetsTotal = (
				await api.get(FARM_ASSETS_COUNT_ROUTE, { params: { farm: farmId } })
			).data;
			const productionTotal = (
				await api.get(FARM_PRODUCTIONS_TOTAL_ROUTE, {
					params: { farm: farmId },
				})
			).data;
			const salesTotal = (
				await api.get(FARM_SALES_TOTAL_ROUTE, { params: { farm: farmId } })
			).data;
			const consumptionTotal = (
				await api.get(FARM_CONSUMPTIONS_TOTAL_ROUTE, {
					params: { farm: farmId },
				})
			).data;
			setCounts({
				assets: assetsTotal,
				production: productionTotal,
				sales: salesTotal,
				consumption: consumptionTotal,
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className=' flex-1  '>
			<div className=' bg-gray-100 pb-4'>
				<div className='text-gray-600 font-semibold text-2xl  px-10 pt-4 pb-1 '>
					{farm.name}
				</div>
				<div
					className={` ${
						open ? ' hidden sm:flex ' : 'flex mx-5 gap-x-2'
					} flex flex-row flex-wrap justify-around items-center`}
				>
					<DashboardCard
						icon={<GiWheat size={50} />}
						amount={counts.production}
						text='Production'
					/>
					<DashboardCard
						icon={<GiCash size={50} />}
						amount={counts.sales}
						text='Sales'
					/>
					<DashboardCard
						icon={<GiPayMoney size={50} />}
						amount={counts.sales}
						text='Expenses'
					/>
					<DashboardCard
						icon={<FaPlateWheat size={50} />}
						amount={counts.consumption}
						text='Consumption'
					/>
				</div>
				<div
					className={` ${
						open
							? 'hidden sm:flex sm:flex-wrap sm:justify-around'
							: ' flex flex-wrap justify-around '
					} `}
				>
					{' '}
					<div className={`${open ? '' : 'mx-5'} grid grid-cols-5 flex-1 `}>
						<div className='col-span-5 md:col-span-3 xs:h-32 '>
							<div className='text-lg text-gray-600 font-light py-3'>
								{' '}
								Total Monthly Production
							</div>
							<div className='bg-white shadow-md rounded-md p-5 '>
								<BarChart data={barChartData} />
							</div>
						</div>
						<div className='col-span-5  md:col-span-2 xs:h-32 ml-3 '>
							<div className='text-lg text-gray-600 font-light py-3'>
								{' '}
								Total Monthly Production per Crop
							</div>
							<div className='bg-white shadow-md rounded-md p-5 '>
								<PieChart data={pieChartData} />
							</div>
						</div>
					</div>
				</div>

				<TableComponent
					name={'Produce'}
					columns={['name', 'quantity', 'description', 'farm']}
				/>
			</div>
		</div>
	);
}
