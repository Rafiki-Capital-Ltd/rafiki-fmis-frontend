import { useEffect, useState, useRef } from 'react';
import { SaleForm, Modal, TableComponent } from '../components';
import { useAuthContext, useFarmContext } from '../hooks';
import {
	createFarmSale,
	deleteFarmSale,
	getFarmSales,
	updateFarmSale,
} from '../api';

export function Sales() {
	const [sales, setSales] = useState([]);
	const [sale, setSale] = useState();
	const [isEdit, setIsEdit] = useState(false);
	const [visible, setVisible] = useState(false);
	const { farm } = useFarmContext();
	const { auth } = useAuthContext();

	const effectRun = useRef(false);
	useEffect(() => {
		if (!effectRun.current)
			(async () => {
				const _sales = await getFarmSales(farm.id);
				setSales(_sales.content);
			})();
		effectRun.current = true;
		return () => effectRun.current;
	}, [sale]);

	const onSubmit = async (data) => {
		let sl;
		if (!isEdit) {
			sl = await createFarmSale({
				...data,
				farm: { id: farm.id },
				owner: { id: auth.id },
			});
			setSales((data) => [sl, ...data]);
		} else {
			sl = await updateFarmSale(sale.id, data);
			setSales((data) => {
				const idx = data.findIndex((s) => s.id === sl.id);
				return [...data.slice(0, idx), sl, ...data.slice(idx + 1, data.length)];
			});
		}
		setVisible(false);
		setSale(null);
		setIsEdit(false);
	};

	const onEdit = async (data) => {
		setSale(data);
		setIsEdit(true);
		setVisible(true);
	};

	const onDelete = async (sale) => {
		await deleteFarmSale(sale);
		setSales((data) => data.filter((s) => s.id !== sale.id));
	};

	return (
		<div className='w-full bg-gray-100 flex flex-col h-screen'>
			<div className='flex justify-between w-full px-10 py-5'>
				<div className='flex py-2  text-gray-600 text-2xl'> Sales </div>
				<button
					className='flex px-4 py-1 items-center rounded-full text-white bg-green-500 shadow-lg'
					onClick={() => setVisible(true)}
				>
					<i data-feather='plus' className=''></i>{' '}
					<p className='pl-1 pr-2'>Add Sale</p>
				</button>
			</div>{' '}
			<TableComponent
				name={'Sales'}
				columns={['date', 'type', 'quantity', 'amount', 'description']}
				data={sales}
				onEdit={onEdit}
				onDelete={onDelete}
			/>
			<Modal
				header={isEdit ? 'Edit Sale' : 'Add New Sale'}
				visible={visible}
				setVisible={setVisible}
			>
				<SaleForm onSubmit={onSubmit} data={sale} />
			</Modal>
		</div>
	);
}
