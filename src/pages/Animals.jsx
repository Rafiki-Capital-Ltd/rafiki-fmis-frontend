import { useEffect, useState, useRef } from 'react';
import { AnimalForm, Modal, TableComponent } from '../components';
import { useAuthContext, useFarmContext } from '../hooks';
import {
	createFarmAnimal,
	deleteFarmAnimal,
	getFarmAnimals,
	updateFarmAnimal,
} from '../api';

export function Animals() {
	const [animals, setAnimals] = useState([]);
	const [animal, setAnimal] = useState();
	const [isEdit, setIsEdit] = useState(false);
	const [visible, setVisible] = useState(false);
	const { farm } = useFarmContext();
	const { auth } = useAuthContext();

	const effectRun = useRef(false);
	useEffect(() => {
		if (!effectRun.current)
			(async () => {
				const _animals = await getFarmAnimals(farm.id);
				setAnimals(_animals.content);
			})();
		effectRun.current = true;
		return () => effectRun.current;
	}, [animal]);

	const onSubmit = async (data) => {
		let a;
		if (!isEdit) {
			a = await createFarmAnimal({
				...data,
				farm: { id: farm.id },
				owner: { id: auth.id },
			});
			setAnimals((data) => [a, ...data]);
		} else {
			a = await updateFarmAnimal(animal.id, data);
			setAnimals((data) => {
				const idx = data.findIndex((an) => an.id === a.id);
				return [...data.slice(0, idx), a, ...data.slice(idx + 1, data.length)];
			});
			setAnimal(null);
			setIsEdit(false);
		}
		setVisible(false);
	};

	const onEdit = async (data) => {
		setAnimal(data);
		setIsEdit(true);
		setVisible(true);
	};

	const onDelete = async (animal) => {
		await deleteFarmAnimal(animal);
		setAnimals((data) => data.filter((a) => a.id !== animal.id));
	};

	return (
		<div className='w-full bg-gray-100 flex flex-col h-screen'>
			<div className='flex justify-between w-full px-10 py-5'>
				<div className='flex py-2  text-gray-600 text-2xl'> Animals </div>
				<button
					className='flex px-4 py-1 items-center rounded-full text-white bg-green-500 shadow-lg'
					onClick={() => setVisible(true)}
				>
					<i data-feather='plus' className=''></i>{' '}
					<p className='pl-1 pr-2'>Add New Animal</p>
				</button>
			</div>{' '}
			<TableComponent
				name={'Animals'}
				columns={['type', 'description', 'quantity']}
				data={animals}
				onEdit={onEdit}
				onDelete={onDelete}
			/>
			<Modal
				header={isEdit ? 'Edit Animal' : 'Add New Animal'}
				visible={visible}
				setVisible={setVisible}
			>
				<AnimalForm onSubmit={onSubmit} data={animal} />
			</Modal>
		</div>
	);
}
