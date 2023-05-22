import { useEffect, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputElement, TableComponent } from '../components';
import { createFarmAsset, getFarmAssets } from '../api';
import { useRef } from 'react';

export function Assets() {
	const [type, setType] = useState();
	const [description, setDescription] = useState();
	const [storageLocation, setStorageLocation] = useState();
	const [status, setStatus] = useState();
	const [assets, setAssets] = useState([]);
	const [visible, setVisible] = useState(false);

	const effectRun = useRef(false);
	useEffect(() => {
		if (!effectRun.current)
			(async () => {
				const _assets = await getFarmAssets();
				setAssets(_assets.content);
			})();
		effectRun.current = true;
		return () => effectRun.current;
	}, []);

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			await createFarmAsset({ type, description, storageLocation, status });
			setVisible(false);
		} catch (error) {
			console.error(error);
		}
	};

	const footerContent = (
		<div>
			<button
				onClick={onSubmit}
				className='bg-green-500 rounded-full text-white px-4 py-2 text-lg shadow-md'
			>
				<p className='flex items-center'> Create</p>
			</button>
		</div>
	);

	return (
		<div className='w-full bg-gray-100 flex flex-col h-screen'>
			<div className='flex justify-between w-full px-10 py-5'>
				<div className='flex py-2  text-gray-600 text-2xl'> Assets </div>
				<button
					className='flex px-4 py-1 items-center rounded-full text-white bg-green-500 shadow-lg'
					onClick={() => setVisible(true)}
				>
					<i data-feather='plus' className=''></i>{' '}
					<p className='pl-1 pr-2'> Add New Asset</p>
				</button>
			</div>{' '}
			<TableComponent
				name={'Assets'}
				columns={['name', 'size', 'county', 'ward', 'Preview']}
				data={assets}
			/>
			<Dialog
				header='Add New Asset'
				visible={visible}
				style={{ width: '50vw' }}
				onHide={() => setVisible(false)}
				footer={footerContent}
			>
				<div className='grid grid-cols-6'>
					<div className='col-span-3 p-5'>
						<InputElement
							type='text'
							label='Type'
							placeHolder='Type'
							required={true}
							onChange={(e) => setType(e.target.value)}
						/>
					</div>

					<div className='col-span-3 p-5'>
						<label htmlFor='description'>Description</label>
						<textarea
							name=''
							id='description'
							cols='30'
							rows='10'
							onChange={(e) => setDescription(e.target.value)}
						></textarea>
					</div>
					<div className='col-span-3 p-5'>
						<InputElement
							type='text'
							label='Storage Location'
							placeHolder='Storage Location'
							required={true}
							onChange={(e) => setStorageLocation(e.target.value)}
						/>
					</div>
					<div className='col-span-3 p-5'>
						<InputElement
							type='text'
							label='Status'
							placeHolder='Status'
							required={true}
							onChange={(e) => setStatus(e.target.value)}
						/>
					</div>
				</div>
			</Dialog>
		</div>
	);
}
