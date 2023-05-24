import { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FarmForm, Modal, Navbar, TableComponent } from '../components';
import { createFarm, getFarms } from '../api';
import { useFarmContext } from '../hooks';

export function Farms() {
	const [farms, setFarms] = useState([]);
	const [visible, setVisible] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const { setFarm } = useFarmContext();

	const onSubmit = async (data) => {
		try {
			const farm = await createFarm(data);
			setFarm(farm);
			navigate(`/dashboard/${farm.id}`);
		} catch (error) {
			console.error(error);
		}
	};

	const effectRun = useRef(false);
	useEffect(() => {
		feather?.replace();
		if (!effectRun.current)
			(async () => {
				const farms = await getFarms();
				setFarms(farms.content);
			})();
		effectRun.current = true;
		return () => effectRun.current;
	}, []);

	return (
		<div className='w-full bg-gray-100 flex flex-col h-screen'>
			<div className='bg-white w-full'>
				<Navbar />
			</div>

			<div className='flex justify-between w-full px-10 py-5'>
				{location === '/farms' ? (
					<div className='flex py-2  text-gray-800 text-3xl font-semibold'>
						My Farms
					</div>
				) : (
					<div className='flex py-2  text-gray-600 text-2xl '>My Farms</div>
				)}

				<button
					className='flex px-4 py-1 items-center rounded-full text-white bg-green-500 shadow-lg'
					onClick={() => setVisible(true)}
				>
					<i data-feather='plus' className=''></i>{' '}
					<p className='pl-1 pr-2'> Add New Farm</p>
				</button>
			</div>
			<TableComponent
				name={'Farms'}
				columns={['name', 'size', 'county', 'ward' , ]}
				data={farms}
			/>
			<Modal visible={visible} setVisible={setVisible}>
				<FarmForm onSubmit={onSubmit} />
			</Modal>
		</div>
	);
}
