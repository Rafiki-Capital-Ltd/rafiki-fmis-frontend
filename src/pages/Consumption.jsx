import { useEffect, useState, useRef } from 'react';
import { ConsumptionForm, Modal, TableComponent } from '../components';
import { useAuthContext, useFarmContext } from '../hooks';
import {
	createFarmConsumption,
	deleteFarmConsumption,
	getFarmConsumptions,
	updateFarmConsumption,
} from '../api';

export function Consumption() {
	const [consumptions, setConsumptions] = useState([]);
	const [consumption, setConsumption] = useState();
	const [isEdit, setIsEdit] = useState(false);
	const [visible, setVisible] = useState(false);
	const { farm } = useFarmContext();
	const { auth } = useAuthContext();

	const effectRun = useRef(false);
	useEffect(() => {
		if (!effectRun.current)
			(async () => {
				const _consumptions = await getFarmConsumptions(farm.id);
				setConsumptions(_consumptions.content);
			})();
		effectRun.current = true;
		return () => effectRun.current;
	}, [consumption]);

	const onSubmit = async (data) => {
		if (!isEdit)
			await createFarmConsumption({
				...data,
				farm: { id: farm.id },
				owner: { id: auth.id },
			});
		else await updateFarmConsumption(consumption.id, data);
		setVisible(false);
	};

	const onEdit = async (data) => {
		setConsumption(data);
		setIsEdit(true);
		setVisible(true);
	};

	const onDelete = async (data) => {
		setConsumption(data);
		await deleteFarmConsumption(data);
	};

	return (
		<div className='w-full bg-gray-100 flex flex-col h-screen'>
			<div className='flex justify-between w-full px-10 py-5'>
				<div className='flex py-2  text-gray-600 text-2xl'> Consumptions </div>
				<button
					className='flex px-4 py-1 items-center rounded-full text-white bg-green-500 shadow-lg'
					onClick={() => setVisible(true)}
				>
					<i data-feather='plus' className=''></i>{' '}
					<p className='pl-1 pr-2'>Add New Asset</p>
				</button>
			</div>{' '}
			<TableComponent
				name={'Consumptions'}
				columns={['date', 'description', 'quantity']}
				data={consumptions}
				onEdit={onEdit}
				onDelete={onDelete}
			/>
			<Modal visible={visible} setVisible={setVisible}>
				<ConsumptionForm onSubmit={onSubmit} data={consumption} />
			</Modal>
		</div>
	);
}
