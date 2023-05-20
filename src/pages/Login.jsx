import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useApiAuth } from '../hooks';
import { LOGIN_ROUTE } from '../api';
import { useNavigate } from 'react-router-dom';

export function Login() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const navigate = useNavigate();
	const apiAuth = useApiAuth();

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await apiAuth.get(LOGIN_ROUTE, {
				headers: {
					Authorization: `Basic ${btoa(`${email}:${password}`)}`,
				},
			});
			navigate('/farms');
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className='bg-gray-100'>
			<div className='grid grid-cols-1  md:grid-cols-3 items-center justify-center h-screen bg-gray-100'>
				<div className='m-10 md:m-0 col-span-1  md:col-start-2 bg-white shadow-md p-10  '>
					<div className='flex gap-x-4 items-center justify-center text-green-500 text-2xl  mb-10'>
						RAFIKI FMIS
					</div>
					<p className='text-[25px]  text-gray-800 mb-2'> Login</p>
					<p className='text-sm text-gray-400 mb-5'>
						{' '}
						Don't have an account{' '}
						<Link to='/register ' className='text-blue-600 underline '>
							{' '}
							Register
						</Link>
					</p>

					<div className='grid grid-row-1  md:grid-row-4  '>
						<div className='row-span-1 md:row-span-2 row-start-2'>
							<form onSubmit={onSubmit}>
								<div className='mb-6'>
									<label className='block mb-2 text-sm font-semibold text-gray-900 '>
										Email
									</label>
									<input
										type='email'
										className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
										placeholder='Email'
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</div>
								<div className='mb-6'>
									<div className='flex justify-between'>
										<label className='block mb-2 text-sm font-semibold text-gray-900'>
											Password
										</label>
										<Link className='text-blue-500 underline text-sm   '>
											Forgot Password ?
										</Link>
									</div>
									<input
										type='password'
										placeholder='Password'
										className='shadow-sm bg-gray-50 border border-gray-300 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 tw dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
										onChange={(e) => setPassword(e.target.value)}
										required
									/>
								</div>

								<div className='flex justify-between'>
									<button
										type='submit'
										className='text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800'
									>
										Login
									</button>
									<a className='text-green-600'></a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
