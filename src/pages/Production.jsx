import { useEffect, useState, useRef } from 'react';
import { ProductionForm, Modal, TableComponent } from '../components';
import { useAuthContext, useFarmContext } from '../hooks';
import {
	createFarmProduction,
	deleteFarmProduction,
	getFarmProductions,
	updateFarmProduction,
} from '../api';

export function Production() {
	const [productions, setProductions] = useState([]);
	const [production, setProduction] = useState();
	const [isEdit, setIsEdit] = useState(false);
	const [visible, setVisible] = useState(false);
	const { farm } = useFarmContext();
	const { auth } = useAuthContext();

	const effectRun = useRef(false);
	useEffect(() => {
		if (!effectRun.current)
			(async () => {
				const _productions = await getFarmProductions(farm.id);
				setProductions(_productions.content);
			})();
		effectRun.current = true;
		return () => effectRun.current;
	}, [production]);

	const onSubmit = async (data) => {
		let pr;
		if (!isEdit) {
			pr = await createFarmProduction({
				...data,
				farm: { id: farm.id },
				owner: { id: auth.id },
			});
			setProductions((data) => [pr, ...data]);
		} else {
			pr = await updateFarmProduction(production.id, data);
			setProductions((data) => {
				const idx = data.findIndex((p) => p.id === pr.id);
				return [...data.slice(0, idx), pr, ...data.slice(idx + 1, data.length)];
			});
		}
		setVisible(false);
		setProduction(null);
		setIsEdit(false);
	};

	const onEdit = async (production) => {
		setProduction(production);
		setIsEdit(true);
		setVisible(true);
	};

	const onDelete = async (production) => {
		await deleteFarmProduction(production);
		setProductions((data) => data.filter((p) => p.id !== production.id));
	};

	return (
		<div className='w-full bg-gray-100 flex flex-col h-screen'>
			<div className='flex justify-between w-full px-10 py-5'>
				<div className='flex py-2  text-gray-600 text-2xl'> Productions </div>
				<button
					className='flex px-4 py-1 items-center rounded-full text-white bg-green-500 shadow-lg'
					onClick={() => setVisible(true)}
				>
					<i data-feather='plus' className=''></i>{' '}
					<p className='pl-1 pr-2'>Add Production</p>
				</button>
			</div>{' '}
			<TableComponent
				name={'Productions'}
				columns={['date', 'description', 'quantity']}
				data={productions}
				onEdit={onEdit}
				onDelete={onDelete}
			/>
			<Modal
				header={isEdit ? 'Edit Production' : 'Add New Production'}
				visible={visible}
				setVisible={setVisible}
			>
				<ProductionForm onSubmit={onSubmit} data={production} />
			</Modal>
		</div>
	);
}
