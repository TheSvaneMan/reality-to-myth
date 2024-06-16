"use client"

function formatDate(dateString) {
	const date = new Date(dateString);
	const options = { day: 'numeric', month: 'long', year: 'numeric' };

	const day = date.getDate();
	let daySuffix = 'th';

	// Determine day suffix (st, nd, rd, th) based on day of the month
	if (day === 1 || day === 21 || day === 31) {
		daySuffix = 'st';
	} else if (day === 2 || day === 22) {
		daySuffix = 'nd';
	} else if (day === 3 || day === 23) {
		daySuffix = 'rd';
	}

	// Format the date string
	const formattedDate = `${day}${daySuffix} ${date.toLocaleDateString('en-US', options)}`;

	return formattedDate;
}

export default function RenderUsers({users}) {
	return (
		<ul className='grid grid-cols-1 gap-4'>
			{
				users.map((user, i) => {
					const formattedDate = formatDate(user.createdDate)
					return (
						<li key={user.fullName + i} className='italic' >
							<span className='text-pink-500 font-bold'>{user.fullName}</span> from  <span className='text-pink-500'>{user.country}</span>, who joined the adventure on the <span className='text-pink-500'>{formattedDate} </span>
						</li>
					)
				})
			}
		</ul>
	)
}