"use client"

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function UserForm() {
	const input_styling = 'p-2 rounded-md text-black';
	const [error, setError] = useState(null);
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('/countries.json'); // Assuming the JSON file is in the /public directory
			const countryList = await response.json();
			setCountries(countryList);
		};

		fetchData();
	}, []);

	const router = useRouter();

	async function onSubmit(event) {
		event.preventDefault()

		try {

			const formData = new FormData(event.currentTarget)
			const response = await fetch('http://localhost:4200/api/users', {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ fullName: formData.get("fullName"), country: formData.get("country"), email: formData.get("email") }),
			})
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const data = await response.json();
			router.push('/experience')
		} catch (error) {
			setError(error.message);
		}
	}
	return (
		<form onSubmit={onSubmit} className='grid grid-cols-1 justify-items-center gap-2 text-white bg-[#355835] py-8 m-0 w-screen px-8'>
			<div className='md:max-w-md grid grid-cols-1 gap-2 m-0'>
				<h2>
					Welcome to
				</h2>
				<h1 className='text-4xl'>
					Reality To Myth
				</h1>
				<hr className='bg-white ' />
				<div className='border border-white grid grid-cols-1 gap-2 px-2 py-4 w-md'>

					<label htmlFor="fullName" >Please enter your full name</label>
					<input type="text" id="fullName" name="fullName" placeholder='Enter your full name please' className={input_styling} required />
					<label htmlFor="country" >Please select where you are from</label>
					<select name="country" id="country" className={input_styling + " bg-white"} required>
						{
							countries.map((country, i) => {
								return (
									<option key={country.name + "-" + i} value={country.name} className={input_styling}>
										{country.name}
									</option>
								)
							})
						}
					</select>
					<label htmlFor="fullName" >Please enter your email address</label>
					<input type="email" id="email" name="email" placeholder='Enter your email' className={input_styling} required />
					<button type='submit' role='button' className='flex items-center justify-center bg-[#f6731a] p-4 hover:bg-orange-400 hover:shadow-md hover:shadow-orange-200 rounded-md ' >
						Join the experience
					</button>
				</div>
				{
					error && <span className='text-red-400 border border-red-400 px-4 bg-white animate-pulse'>
						Sorry, an error occured. Please try again 
					</span>
				}
			</div>

		</form>
	)
}