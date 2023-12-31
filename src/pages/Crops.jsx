import { useEffect, useState, useRef } from 'react';
import { CropForm, Modal, TableComponent } from '../components';
import { useAuthContext, useFarmContext } from '../hooks';
import {
	createFarmCrop,
	deleteFarmCrop,
	getFarmCrops,
	updateFarmCrop,
} from '../api';

export function Crops() {
	const [crops, setCrops] = useState([]);
	const [crop, setCrop] = useState();
	const [isEdit, setIsEdit] = useState(false);
	const [visible, setVisible] = useState(false);
	const { farm } = useFarmContext();
	const { auth } = useAuthContext();

	const effectRun = useRef(false);
	useEffect(() => {
		if (!effectRun.current)
			(async () => {
				const _crops = await getFarmCrops(farm.id);
				setCrops(_crops.content);
			})();
		effectRun.current = true;
		return () => effectRun.current;
	}, [crop]);

	const onSubmit = async (data) => {
		let c;
		if (!isEdit) {
			c = await createFarmCrop({
				...data,
				farm: { id: farm.id },
				owner: { id: auth.id },
			});
			setCrops((data) => [c, ...data]);
		} else {
			c = await updateFarmCrop(crop.id, data);
			setCrops((data) => {
				const idx = data.findIndex((cp) => cp.id === c.id);
				return [...data.slice(0, idx), c, ...data.slice(idx + 1, data.length)];
			});
		}
		setVisible(false);
		setCrop(null);
		setIsEdit(false);
	};

	const onEdit = async (crop) => {
		setCrop(crop);
		setIsEdit(true);
		setVisible(true);
	};

	const onDelete = async (crop) => {
		await deleteFarmCrop(crop);
		setCrops((data) => data.filter((c) => c.id !== crop.id));
	};

	return (
		<div className='w-full bg-gray-100 flex flex-col h-screen'>
			<div className='flex justify-between w-full px-10 py-5'>
				<div className='flex py-2  text-gray-600 text-2xl'> Crops </div>
				<button
					className='flex px-4 py-1 items-center rounded-full text-white bg-green-500 shadow-lg'
					onClick={() => setVisible(true)}
				>
					<i data-feather='plus' className=''></i>{' '}
					<p className='pl-1 pr-2'>Add New Crop</p>
				</button>
			</div>{' '}
			<TableComponent
				name={'Crops'}
				columns={['type', 'description', 'quantity']}
				data={crops}
				onEdit={onEdit}
				onDelete={onDelete}
			/>
			<Modal
				header={isEdit ? 'Edit Crop' : 'Add New Crop'}
				visible={visible}
				setVisible={setVisible}
			>
				<CropForm onSubmit={onSubmit} data={crop} />
			</Modal>
		</div>
	);
}
