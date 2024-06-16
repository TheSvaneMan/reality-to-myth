import RenderUsers from './userList';

async function GetUsers() {
	try {
		const response = await fetch('http://localhost:4200/api/users', {
			method: "GET"	})
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		error.log(error.message);
	}
}

export default async function Page() {
	const users = await GetUsers()
	return (
		<section className='p-12'>
			<h1 className='mb-4'>
				Amazing users of the experience!
			</h1>
			<hr className='mb-4'></hr>
			{typeof users == "null" || users.length === 0 ? <span>
					Unfortunately, there are no users who tried the experience yet.<a href='/' className='text-pink-500'> Try out the experience now!</a>
				</span>	:
				<RenderUsers users={users} /> 
		}
		</section>
	)
}