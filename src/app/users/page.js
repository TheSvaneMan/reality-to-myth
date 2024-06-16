import Image from 'next/image';
import RenderUsers from './userList';

async function getData() {
	const res = await fetch('http://localhost:4200/api/users', {
		method: "GET",
	cache: 'no-store'
	})
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default async function Page() {
	const users = await getData()
	return (
		<section className='p-8'>
			<h1 className='mb-4 font-bold'>
				Amazing users of the Myth to Reality experience!
			</h1>
			<hr className='mb-4'></hr>
			{typeof users == "null" || users.length === 0 ? <span>
					Unfortunately, there are no users who tried the experience yet.<a href='/' className='text-pink-500'> Try out the experience now!</a>
			</span> :
				<div>
					<RenderUsers users={users} /> 
					<div className='grid grid-cols-1 gap-2'>
						<hr className='my-4' />
						<h3 className='mb-4 text-pink-500 text-xl' >
							🍓🍓🍓 Thank you so much for joining the adventure! 🍓🍓🍓
						</h3>
						<Image src="/images/fairy/strawberry-fairy-removebg-preview.png" height={72} width={128} alt="strawberry tree fairy " className='floating'/>
					</div>
				</div>
		}
		</section>
	)
}