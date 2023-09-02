import { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FarmForm, Modal, Navbar, TableComponent } from '../components';
import { createFarm, deleteFarm, getFarms, updateFarm } from '../api';
import { useFarmContext } from '../hooks';

export function Farms() {
	const [farms, setFarms] = useState([]);
	const [visible, setVisible] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [_farm, _setFarm] = useState();
	const navigate = useNavigate();
	const location = useLocation();
	const { setFarm } = useFarmContext();
	const [isLoading, setIsLoading] = useState(false);

	const effectRun = useRef(false);
	useEffect(() => {
		feather?.replace();
		if (!effectRun.current)
			(async () => {
				const farms = (await getFarms()).content;
				farms.map((farm) => {
					farm.county = farm.county.name;
					farm.constituency = farm.constituency.name;
					farm.subCounty = farm.subCounty.name;
				});
				setFarms(farms);
			})();
		effectRun.current = true;
		return () => effectRun.current;
	}, [visible]);

	const onSubmit = async (data) => {
		let fm;
		if (!isEdit) {
			fm = await createFarm(data);
			fm = {
				...fm,
				county: fm.county.name,
				constituency: fm.constituency.name,
				subCounty: fm.subCounty.name,
			};
			setFarms((data) => [fm, ...data]);
		} else {
			fm = await updateFarm(_farm.id, data);
			fm = {
				...fm,
				county: fm.county.name,
				constituency: fm.constituency.name,
				subCounty: fm.subCounty.name,
			};
			setFarms((data) => {
				const idx = data.findIndex((f) => f.id === fm.id);
				return [...data.slice(0, idx), fm, ...data.slice(idx + 1, data.length)];
			});
		}
		setVisible(false);
		_setFarm(null);
		setIsEdit(false);
	};

	const onEdit = async (data) => {
		_setFarm(data);
		setIsEdit(true);
		setVisible(true);
	};

	const onDelete = async (farm) => {
		await deleteFarm(farm.id);
		setFarms((data) => data.filter((fm) => fm.id !== farm.id));
	};

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
				columns={['name', 'size', 'county', 'constituency', 'subCounty']}
				data={farms}
				onEdit={onEdit}
				onDelete={onDelete}
			/>
			<Modal
				header={isEdit ? 'Edit Farm' : 'Add New Farm'}
				visible={visible}
				setVisible={setVisible}
			>
				<FarmForm onSubmit={onSubmit} data={_farm} />
			</Modal>
		</div>
	);
}
