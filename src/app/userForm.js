"use client"

import countries from './data/countries';

export default function UserForm() {
	const input_styling = 'p-2 rounded-md text-black';

	async function onSubmit(event) {
		event.preventDefault()

		// const formData = new FormData(event.currentTarget)
		// console.log("formData", formData.get("fullName"))
		/* const response = await fetch('http://localhost:4200/api/submit', {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name: formData.get("fullName"), country: formData.get("country"), email: formData.get("email") }),
		}) */

		// Handle response if necessary
		// const data = await response.json()
		// ...
		//router.push('/experience')
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
				<div className='border border-white grid grid-cols-1 gap-2 px-2 py-4'>

					<label htmlFor="fullName" >Please enter your full name</label>
					<input type="text" id="fullName" name="fullName" placeholder='Enter your full name please' className={input_styling} />
					<label htmlFor="country" >Please select where you are from</label>
					<select name="" id="" className={input_styling + " bg-white"}>
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
					<input type="email" id="email" name="email" placeholder='Enter your email' className={input_styling} />
					<a href='/experience' className='flex items-center bg-[#f6731a] p-4 hover:bg-orange-400 hover:shadow-md hover:shadow-orange-200 rounded-md '>
						Join the experience
					</a>
					{/* <button type='submit' role='button' >
						Join the experience
					</button> */}
				</div>
			</div>

		</form>
	)
}