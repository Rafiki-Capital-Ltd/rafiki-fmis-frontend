import { useEffect, useState, useRef } from 'react';
import { InputForm, Modal, TableComponent } from '../components';
import {
	createFarmInput,
	deleteFarmInput,
	getFarmInputs,
	updateFarmInput,
} from '../api';

import { useAuthContext, useFarmContext } from '../hooks';

export function FarmInputs() {
	const [inputs, setInputs] = useState([]);
	const [visible, setVisible] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [input, setInput] = useState();
	const { farm } = useFarmContext();
	const { auth } = useAuthContext();

	const effectRun = useRef(false);
	useEffect(() => {
		if (!effectRun.current)
			(async () => {
				const _inputs = await getFarmInputs(farm.id);
				setInputs(_inputs.content);
			})();
		effectRun.current = true;
		return () => effectRun.current;
	}, []);

	const onSubmit = async (data) => {
		let i;
		if (!isEdit) {
			i = await createFarmInput({
				...data,
				farm: { id: farm.id },
				owner: { id: auth.id },
			});
			setInputs((data) => [i, ...data]);
		} else {
			i = await updateFarmInput(input.id, data);
			setInputs((data) => {
				const idx = data.findIndex((ip) => ip.id === i.id);
				return [...data.slice(0, idx), i, ...data.slice(idx + 1, data.length)];
			});
			setInput(null);
			setIsEdit(false);
		}
		setVisible(false);
	};

	const onEdit = async (input) => {
		setInput(input);
		setIsEdit(true);
		setVisible(true);
	};

	const onDelete = async (input) => {
		await deleteFarmInput(input);
		setInputs((data) => data.filter((a) => a.id !== input.id));
	};

	return (
		<div className='w-full bg-gray-100 flex flex-col h-screen'>
			<div className='flex justify-between w-full px-10 py-5'>
				<div className='flex py-2  text-gray-600 text-2xl'>Farm Inputs</div>
				<button
					className='flex px-4 py-1 items-center rounded-full text-white bg-green-500 shadow-lg'
					onClick={() => setVisible(true)}
				>
					<i data-feather='plus' className=''></i>
					<p className='pl-1 pr-2'>Add New Input</p>
				</button>
			</div>
			<TableComponent
				name={'Inputs'}
				columns={['type', 'description', 'quantity']}
				data={inputs}
				onEdit={onEdit}
				onDelete={onDelete}
			/>
			<Modal
				header={isEdit ? 'Edit Input' : 'Add New Input'}
				visible={visible}
				setVisible={setVisible}
			>
				<InputForm onSubmit={onSubmit} data={input} />
			</Modal>
		</div>
	);
}
