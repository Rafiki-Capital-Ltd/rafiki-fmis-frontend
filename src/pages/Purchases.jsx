import { useEffect, useState, useRef } from 'react';
import { PurchaseForm, Modal, TableComponent } from '../components';
import { useAuthContext, useFarmContext } from '../hooks';
import {
	createFarmPurchase,
	deleteFarmPurchase,
	getFarmPurchases,
	updateFarmPurchase,
} from '../api';

export function Purchases() {
	const [purchases, setPurchases] = useState([]);
	const [purchase, setPurchase] = useState();
	const [isEdit, setIsEdit] = useState(false);
	const [visible, setVisible] = useState(false);
	const { farm } = useFarmContext();
	const { auth } = useAuthContext();

	const effectRun = useRef(false);
	useEffect(() => {
		if (!effectRun.current)
			(async () => {
				const _purchases = await getFarmPurchases(farm.id);
				setPurchases(_purchases.content);
			})();
		effectRun.current = true;
		return () => effectRun.current;
	}, [purchase]);

	const onSubmit = async (data) => {
		let pc;
		if (!isEdit) {
			pc = await createFarmPurchase({
				...data,
				farm: { id: farm.id },
				owner: { id: auth.id },
			});
			setPurchases((data) => [pc, ...data]);
		} else {
			pc = await updateFarmPurchase(purchase.id, data);
			setPurchases((data) => {
				const idx = data.findIndex((p) => p.id === pc.id);
				return [...data.slice(0, idx), pc, ...data.slice(idx + 1, data.length)];
			});
		}
		setVisible(false);
		setPurchase(null);
		setIsEdit(false);
	};

	const onEdit = async (data) => {
		setPurchase(data);
		setIsEdit(true);
		setVisible(true);
	};

	const onDelete = async (purchase) => {
		await deleteFarmPurchase(purchase);
		setPurchases((data) => data.filter((pc) => pc.id !== purchase.id));
	};

	return (
		<div className='w-full bg-gray-100 flex flex-col h-screen'>
			<div className='flex justify-between w-full px-10 py-5'>
				<div className='flex py-2  text-gray-600 text-2xl'> Purchases </div>
				<button
					className='flex px-4 py-1 items-center rounded-full text-white bg-green-500 shadow-lg'
					onClick={() => setVisible(true)}
				>
					<i data-feather='plus' className=''></i>{' '}
					<p className='pl-1 pr-2'>Add Purchase</p>
				</button>
			</div>{' '}
			<TableComponent
				name={'Purchases'}
				columns={['date', 'type', 'quantity', 'amount', 'description']}
				data={purchases}
				onEdit={onEdit}
				onDelete={onDelete}
			/>
			<Modal
				header={isEdit ? 'Edit Purchase' : 'Add New Purchase'}
				visible={visible}
				setVisible={setVisible}
			>
				<PurchaseForm onSubmit={onSubmit} data={purchase} />
			</Modal>
		</div>
	);
}
