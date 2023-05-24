import { useEffect, useState, useRef } from 'react';
import { AssetForm, Modal, TableComponent } from '../components';
import { createFarmAsset, getFarmAssets } from '../api';

import { useFarmContext } from '../hooks';

export function Assets() {
	const [assets, setAssets] = useState([]);
	const [visible, setVisible] = useState(false);
	const { farm } = useFarmContext();

	const effectRun = useRef(false);
	useEffect(() => {
		if (!effectRun.current)
			(async () => {
				const _assets = await getFarmAssets(farm.id);
				setAssets(_assets.content);
			})();
		effectRun.current = true;
		return () => effectRun.current;
	}, []);

	const onSubmit = async (data) => {
		try {
			await createFarmAsset({ ...data, farm: { id: farm.id } });
			setVisible(false);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className='w-full bg-gray-100 flex flex-col h-screen'>
			<div className='flex justify-between w-full px-10 py-5'>
				<div className='flex py-2  text-gray-600 text-2xl'> Assets </div>
				<button
					className='flex px-4 py-1 items-center rounded-full text-white bg-green-500 shadow-lg'
					onClick={() => setVisible(true)}
				>
					<i data-feather='plus' className=''></i>
					<p className='pl-1 pr-2'> Add New Asset</p>
				</button>
			</div>
			<TableComponent
				name={'Assets'}
				columns={['type', 'description', 'storageLocation', 'status']}
				data={assets}
			/>
			<Modal visible={visible} setVisible={setVisible}>
				<AssetForm onSubmit={onSubmit} />
			</Modal>
		</div>
	);
}
