import { Avatar } from 'primereact/avatar';
import { useAuthContext } from '../hooks';

export function Navbar() {
	const { auth } = useAuthContext();

	return (
		<div className='flex justify-end px-5 py-3 w-full'>
			<div className='text-md  text-gray-400 font-[13px] px-2 flex items-center gap-2 '>
				<p>{`${auth.firstName} ${auth.lastName}`}</p>
				<Avatar image={auth.avatar} size='large' shape='circle' />
			</div>
		</div>
	);
}
