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
import { GiCorn, GiCow, GiFarmTractor } from 'react-icons/gi';
import { FiChevronLeft, FiFileText, FiLayers } from 'react-icons/fi';
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
		console.log(location.pathname);
	}, [location]);

	const Menus = [
		{ title: 'Dashboard', src: <FiFileText /> },
		{ title: 'Assets ', src: <FiLayers />, gap: true },
		{ title: 'Animals', src: <GiCow /> },
		{ title: 'Crops', src: <RiPlantLine /> },
		{ title: 'Production', src: <BsGraphUpArrow />, gap: true },
		{ title: 'Consumption', src: <BsCartCheck /> },
		{ title: 'Sales', src: <MdPointOfSale /> },
		{ title: 'Farms', src: <GiFarmTractor /> },
	];

	return (
		<>
			{' '}
			<div className='flex max-w-screen '>
				<aside
					className={` ${
						open ? ' w-3/4 sm:w-72' : 'w-20 '
					} bg-green-500 h-screen p-5   pt-8 sticky top-0 duration-300`}
				>
					<span
						onClick={() => setOpen(!open)}
						className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full bg-white ${!open && 'rotate-180'}`}
					>
						<FiChevronLeft/>
					</span>

					<div className='flex items-center justify-center gap-x-2 font-semibold pb-5 pt-5'>
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
					<ul className='pt-6'>
						{Menus.map((Menu, index) => (
							<NavLink
								to={
									Menu.title === 'Dashboard'
										? `/dashboard/${farm.id}`
										: Menu.title === 'Farms'
										? '/farms'
										: `/dashboard/${farm.id}/${Menu.title.toLowerCase()}`
								}
							>
								<li
									key={index}
									className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-100 text-sm items-center gap-x-4 
              ${Menu.gap ? 'mt-9' : 'mt-2'} ${
										location.pathname ===
											'/dashboard/' + Menu.title.toLocaleLowerCase() &&
										'bg-light-white'
									} `}
								>
									{/* <i data-feather={Menu.src}></i> */}
									<div className='text-2xl'> {Menu.src}</div>
									<span
										className={`${!open && 'hidden'} origin-left duration-200`}
									>
										{Menu.title}
									</span>
								</li>{' '}
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
