import React from 'react';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { InputElement } from '../components';
import { useNavigate } from 'react-router-dom';
import { register } from '../api';

export function Register() {
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [email, setEmail] = useState();
	const [phoneNumber, setPhoneNumber] = useState();
	const [password, setPassword] = useState();

	const navigate = useNavigate();

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			await register({
				firstName,
				lastName,
				email,
				phoneNumber,
				password,
			});
			navigate('/login');
		} catch (error) {
			console.error(error);
		}
	};

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
							<form onSubmit={onSubmit}>
								<div className='mb-5 flex justify-between gap-x-2 '>
									<InputElement
										type='text'
										label='First Name'
										placeHolder='First Name'
										required={true}
										onChange={(e) => setFirstName(e.target.value)}
									/>
									<InputElement
										type='text'
										label='Last Name'
										placeHolder='Last Name'
										required={true}
										onChange={(e) => setLastName(e.target.value)}
									/>
								</div>

								<InputElement
									type='email'
									label='Email'
									placeHolder='Email'
									required={true}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<InputElement
									type='text'
									label='Phone Number'
									placeHolder='Phone Number'
									required={false}
									onChange={(e) => setPhoneNumber(e.target.value)}
								/>
								<InputElement
									type='password'
									label='Password'
									placeHolder='Password'
									required={true}
									onChange={(e) => setPassword(e.target.value)}
								/>

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
