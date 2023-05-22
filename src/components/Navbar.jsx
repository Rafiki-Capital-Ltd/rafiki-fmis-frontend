import { Avatar } from 'primereact/avatar';
import { useAuthContext } from '../hooks';

export function Navbar() {
	const { auth } = useAuthContext();

	return (
		<div className='flex justify-end px-5 py-3 w-full'>
			<div className='text-md  text-gray-400 font-[13px] px-2 flex items-center gap-2 '>
				<Avatar icon='pi pi-user' size='large' shape='circle' />
				<p>{auth.email}</p>
			</div>
		</div>
	);
}
