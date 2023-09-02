import React from 'react';
import {
	Routes,
	Route,
	Link,
	useLocation,
	Outlet,
	NavLink,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GiCorn, GiCow, GiFarmTractor, GiExpense } from 'react-icons/gi';
import { BiSolidPurchaseTag } from 'react-icons/bi';
import { FiChevronLeft, FiFileText, FiLogOut } from 'react-icons/fi';
import { FaScrewdriverWrench, FaBucket } from 'react-icons/fa6';
import { RiPlantLine } from 'react-icons/ri';
import { BsCartCheck, BsGraphUpArrow } from 'react-icons/bs';
import { MdPointOfSale } from 'react-icons/md';
import { Navbar } from './Navbar';
import { useFarmContext } from '../hooks';

export function Sidebar() {
	const [open, setOpen] = useState(true);
	const location = useLocation();

	const { farm } = useFarmContext();

	useEffect(() => {
		// feather.replace();
		console.log(location.pathname);
	}, [location]);

	const menus = [
		{ title: 'Dashboard', src: <FiFileText /> },
		{ title: 'Assets', src: <FaScrewdriverWrench />, gap: true },
		{ title: 'Inputs', src: <FaBucket /> },
		{ title: 'Animals', src: <GiCow /> },
		{ title: 'Crops', src: <RiPlantLine /> },
		{ title: 'Production', src: <BsGraphUpArrow /> },
		{ title: 'Consumption', src: <BsCartCheck /> },
		{ title: 'Sales', src: <MdPointOfSale /> },
		{ title: 'Purchases', src: <BiSolidPurchaseTag /> },
		{ title: 'Expenses', src: <GiExpense /> },
		{ title: 'Farms', src: <GiFarmTractor /> },
		{ title: 'Logout', src: <FiLogOut />, gap: true },
	];

	return (
		<>
			{' '}
			<div className='flex max-w-screen '>
				<aside
					className={` ${
						open ? ' w-3/4 sm:w-72' : 'w-20 '
					} bg-green-500 h-screen p-3   pt-4 sticky top-0 duration-300`}
				>
					<span
						onClick={() => setOpen(!open)}
						className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full bg-white ${!open && 'rotate-180'}`}
					>
						<FiChevronLeft />
					</span>

					<div className='flex items-center justify-center gap-x-2 font-semibold pb-2 pt-2'>
						<div className='text-white text-3xl'>
							{' '}
							<GiCorn />
						</div>{' '}
						<p
							className={` ${
								!open ? 'hidden' : 'flex text-white'
							} text-2xl text-white`}
						>
							Rafiki FMIS
						</p>
					</div>
					<ul className='pt-2'>
						{menus.map((menu, index) => (
							<NavLink
								key={index}
								to={
									menu.title === 'Dashboard'
										? `/dashboard/${farm?.id}`
										: menu.title === 'Farms'
										? '/farms'
										: menu.title === 'Logout'
										? '/logout'
										: `/dashboard/${farm?.id}/${menu.title.toLowerCase()}`
								}
								className={({ isActive }) =>
									isActive
										? `flex  rounded-md p-2 cursor-pointer text-sm items-center gap-x-4 bg-green-400 text-white hover:text-gray-200 ${
												menu.gap ? 'mt-9' : 'mt-2'
										  }`
										: ` flex  rounded-md p-2 cursor-pointer hover:bg-green-400 text-gray-100 text-sm items-center gap-x-4 ${
												menu.gap ? 'mt-9' : 'mt-2'
										  }`
								}
								end
							>
								<span className='text-xl'>{menu.src}</span>
								<span
									className={`${!open && 'hidden'} origin-left duration-200`}
								>
									{menu.title}
								</span>
							</NavLink>
						))}
					</ul>
				</aside>
				<div className='flex flex-col  w-full'>
					<div className='w-[100%]'>
						<Navbar />
					</div>
					<main className='flex max-w-full h-full bg-gray-100'>
						<Outlet />
					</main>
				</div>
			</div>
		</>
	);
}

export default Sidebar;
