import React from 'react';
import { Link } from 'react-router-dom';

export function Register() {
	return (
		<div className='bg-gray-100'>
			<div className='grid grid-cols-1  md:grid-cols-3 items-center justify-center h-screen bg-gray-100'>
				<div className='m-10 md:m-0 col-span-1  md:col-start-2 bg-white shadow-md p-10  '>
					<div className='flex  items-center justify-center text-green-500 text-2xl  mb-5'>
						RAFIKI FARMERS
					</div>
					<p className='text-[25px]  text-gray-800 mb-1'> Register</p>
					<p className='text-sm text-gray-400 mb-5'>
						{' '}
						Already have an account{' '}
						<Link to='/login ' className='text-blue-500 underline '>
							{' '}
							Login
						</Link>
					</p>

					<div className='grid grid-row-1  md:grid-row-4  '>
						<div className='row-span-1 md:row-span-2 row-start-2'>
							<form>
								<div className='mb-5 flex justify-between gap-x-2 '>
									<div>
										<label className='block mb-1 text-sm font-semibold text-gray-900'>
											First Name
										</label>
										<input
											placeholder='First name'
											className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
											required
										/>
									</div>
									<div>
										<label className='block mb-1 text-sm font-semibold text-gray-900'>
											Middle Name
										</label>
										<input
											placeholder='Last name'
											className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
											required
										/>
									</div>
								</div>
								<div className='mb-5'>
									<label className='block mb-1 text-sm font-semibold text-gray-900 '>
										Last Name
									</label>
									<input
										type='text'
										className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
										placeholder='Email'
										required
									/>
								</div>
								<div className='mb-5'>
									<label className='block mb-1 text-sm font-semibold text-gray-900 '>
										Email
									</label>
									<input
										type='email'
										className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
										placeholder='Email'
										required
									/>
								</div>
								<div className='mb-5'>
									<label className='block mb-1 text-sm font-semibold text-gray-900'>
										Password
									</label>
									<input
										type='password'
										placeholder='Password'
										className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
										required
									/>
								</div>

								<div className='flex justify-between'>
									<button
										type='submit'
										className='text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800'
									>
										Register
									</button>
									<a className='text-blue-500'></a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
