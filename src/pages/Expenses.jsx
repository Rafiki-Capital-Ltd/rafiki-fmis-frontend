import { useEffect, useState, useRef } from 'react';
import { ExpenseForm, Modal, TableComponent } from '../components';
import { useAuthContext, useFarmContext } from '../hooks';
import {
	createFarmExpense,
	deleteFarmExpense,
	getFarmExpenses,
	updateFarmExpense,
} from '../api';

export function Expenses() {
	const [expenses, setExpenses] = useState([]);
	const [expense, setExpense] = useState();
	const [isEdit, setIsEdit] = useState(false);
	const [visible, setVisible] = useState(false);
	const { farm } = useFarmContext();
	const { auth } = useAuthContext();

	const effectRun = useRef(false);
	useEffect(() => {
		if (!effectRun.current)
			(async () => {
				const _expenses = await getFarmExpenses(farm.id);
				setExpenses(_expenses.content);
			})();
		effectRun.current = true;
		return () => effectRun.current;
	}, [expense]);

	const onSubmit = async (data) => {
		let ex;
		if (!isEdit) {
			ex = await createFarmExpense({
				...data,
				farm: { id: farm.id },
				owner: { id: auth.id },
			});
			setExpenses((data) => [ex, ...data]);
		} else {
			ex = await updateFarmExpense(expense.id, data);
			setExpenses((data) => {
				const idx = data.findIndex((e) => e.id === ex.id);
				return [...data.slice(0, idx), ex, ...data.slice(idx + 1, data.length)];
			});
		}
		setVisible(false);
		setExpense(null);
		setIsEdit(false);
	};

	const onEdit = async (data) => {
		setExpense(data);
		setIsEdit(true);
		setVisible(true);
	};

	const onDelete = async (expense) => {
		await deleteFarmExpense(expense);
		setExpenses((data) => data.filter((ex) => ex.id !== expense.id));
	};

	return (
		<div className='w-full bg-gray-100 flex flex-col h-screen'>
			<div className='flex justify-between w-full px-10 py-5'>
				<div className='flex py-2  text-gray-600 text-2xl'> Expenses </div>
				<button
					className='flex px-4 py-1 items-center rounded-full text-white bg-green-500 shadow-lg'
					onClick={() => setVisible(true)}
				>
					<i data-feather='plus' className=''></i>{' '}
					<p className='pl-1 pr-2'>Add Expense</p>
				</button>
			</div>{' '}
			<TableComponent
				name={'Expenses'}
				columns={['date', 'type', 'amount', 'description']}
				data={expenses}
				onEdit={onEdit}
				onDelete={onDelete}
			/>
			<Modal
				header={isEdit ? 'Edit Expense' : 'Add New Expense'}
				visible={visible}
				setVisible={setVisible}
			>
				<ExpenseForm onSubmit={onSubmit} data={expense} />
			</Modal>
		</div>
	);
}
