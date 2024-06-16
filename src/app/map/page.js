"use client"

import { useState } from 'react';
import Map from './map'

export default function Page() {
	const [selectedLocation, setSelectedLocation] = useState({
		id: 1,
		country: "Portugal",
		latitude: 41.4545, // Faf's latitude
		longitude: -8.1889, // Faf's longitude
	},);

	const locations = [
		{
			id: 1,
			country: "Portugal",
			latitude: 41.4545, // Faf's latitude
			longitude: -8.1889, // Faf's longitude
			partipantsCount: 4
		},
		{
			id: 2,
			country: "Denmark",
			latitude: 56.1629,
			longitude: 10.2039,
			partipantsCount: 2
		},
		{
			id: 3,
			country: "Namibia",
			latitude: -22.5609,
			longitude: 17.0658,
			partipantsCount: 1
		}
	];
	return (
		<section className='min-h-screen '>
			<div className='bg-red-400 h-[480px]'>
				<Map locations={locations} />
			</div>
			<section className='grid grid-cols-1 justify-items-center max-w-[720px]'>
				<ul className='bg-[#355835] text-white w-full '>
					{
						locations.map((location, i) => {
							return (

								<button onClick={() => setSelectedLocation(location)} key={i} name={location.country + "-" + i} className={selectedLocation.id === location.id ? 'bg-orange-600 border mflex items-center text-white px-4 py-2 rounded-md' : 'border-orange-600 border flex items-center text-orange-600 px-4 py-2 rounded-md'}>
									{location.country}
								</button>
							)
						})
					}
				</ul>
				<div className='grid grid-cols-2 gap-2 border-orange-400 border p-4'>
					<span>
						Selected country:
					</span>
					<span className='text-orange-600'>
						 {selectedLocation.country}
					</span>
					<span>
						Selected country participants: 
					</span>
					<span className='text-orange-600'>
						{selectedLocation.partipantsCount}
					</span>
				</div>
				
				
				<span>
					Total number of participants: 
				</span>
			</section>
			
		</section>
	)
}