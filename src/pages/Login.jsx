import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { useAuthContext } from '../hooks';
import { login } from '../api';
import { InputElement } from '../components';
import { toast } from 'react-toastify';

export function Login() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const navigate = useNavigate();
	const location = useLocation();
	const { setAuth } = useAuthContext();
	const from = location.state?.from?.pathname || '/';

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const auth = await login({ email, password });
			localStorage.setItem('accessToken', auth.accessToken);
			localStorage.setItem('refreshToken', auth.refreshToken);
			setAuth(auth);
			toast.success('Login successfull!');
			navigate(from, { replace: true });
		} catch (err) {
			console.error(err);
			toast.error('Login failed!');
		}
	};

	return (
		<div className='grid grid-cols-1  md:grid-cols-4 items-center justify-center h-screen bg-gray-100'>
			<div className='m-5 md:m-0 col-span-1  md:col-start-2 md:col-span-2 bg-white shadow-md p-10 rounded-xl'>
				<div className='flex gap-x-4 items-center justify-center text-green-500 text-2xl  mb-10'>
					<h1 className='text-3xl font-medium'>Rafiki FMIS</h1>
				</div>
				<p className='text-[25px]  text-gray-800 mb-2'>Login</p>
				<p className='text-sm text-gray-400 mb-5'>
					Don't have an account
					<Link to='/register ' className='text-blue-600 underline '>
						Register
					</Link>
				</p>

				<div className='grid grid-row-1  md:grid-row-4'>
					<div className='row-span-1 md:row-span-2 row-start-2'>
						<form onSubmit={onSubmit}>
							<InputElement
								type='email'
								label='Email'
								placeHolder='Enter your email'
								required={true}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<InputElement
								type='password'
								label='Password'
								placeHolder='Enter your password'
								required={true}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<div className='flex justify-between'>
								<button
									type='submit'
									className='text-white bg-green-700 rounded-md w-full text-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800'
								>
									Login
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
