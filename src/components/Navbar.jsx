import { Avatar } from 'primereact/avatar';

export function Navbar() {
	return (
		<div className='flex justify-end px-5 py-3 w-full'>
			<div className='text-md  text-gray-400 font-[13px] px-2 flex items-center gap-2 '>
				<Avatar icon='pi pi-user' size='large' shape='circle' />
				<p> test@test.com</p>
			</div>
		</div>
	);
}
