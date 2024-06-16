"use client"

import { useState } from 'react';
import Map from './map';

const locations = [
	{
		id: 1,
		country: "Portugal",
		latitude: 41.4545, // Faf's latitude
		longitude: -8.1889, // Faf's longitude
		partipantsCount: 4,
		nationalPlant: "Lavender",
		nationalPlantURL: "https://da.wikipedia.org/wiki/Lavendel"
	},
	{
		id: 2,
		country: "Denmark",
		latitude: 56.1629,
		longitude: 10.2039,
		partipantsCount: 2,
		nationalPlant: "Marguerite daisy",
		nationalPlantURL: "https://en.wikipedia.org/wiki/Argyranthemum_frutescens"

	},
	{
		id: 3,
		country: "Namibia",
		latitude: -22.5609,
		longitude: 17.0658,
		partipantsCount: 1,
		nationalPlant: "Welwitschia",
		nationalPlantURL: "https://en.wikipedia.org/wiki/Welwitschia"
	}
];

export default function Page() {
	const [selectedLocation, setSelectedLocation] = useState(locations[0]);

	const [viewport, setViewport] = useState({
		latitude: 41.4545, // Faf's latitude
		longitude: -8.1889, // Faf's longitude
		zoom: 6, // Default zoom level
		width: "100vw",
		height: "100vh"
	});




	const handleLocationSelection = (location) => {
		setSelectedLocation(location)
		setViewport({
			latitude: location.latitude,
			longitude: location.longitude,
			zoom: 6, // Default zoom level
			width: "100vw",
			height: "100vh"
		})
	}
	return (
		<section className='min-h-screen w-screen'>
			<section className=' w-screen mb-8'>

				<h1 className='p-4'>
					Select a country to empathize further with fellow <a href='/users' className='text-orange-600'>participants</a> ..
				</h1>
				<ul className='bg-[#355835] text-white w-screen grid grid-cols-1 gap-4 py-4 justify-items-center'>
					{
						locations.map((location, i) => {
							return (

								<button onClick={() => handleLocationSelection(location)} key={i} name={location.country + "-" + i} className={selectedLocation.id === location.id ? 'bg-orange-600 border flex items-center justify-center text-white w-[128px] px-4 py-2 rounded-md' : 'border-orange-600 border flex items-center justify-center text-white w-[128px] px-4 py-2 rounded-md'}>
									{location.country}
								</button>
							)
						})
					}
				</ul>
				<p className='m-0 flex-wrap p-4'>
					<span className='text-orange-600'>
						{selectedLocation.partipantsCount}
					</span> {selectedLocation.partipantsCount == 0 && 'people'} {selectedLocation.partipantsCount == 1 && 'person'} {selectedLocation.partipantsCount > 1 && 'people'} from <span className='text-orange-600'>
						{selectedLocation.country}
					</span> took part in the experience!
				</p>
				<hr className='text-black mb-4 mx-4' />
				<p className='italic px-4'>
					Did you know, that the national plant of <span className='text-orange-600'>
						{selectedLocation.country}
					</span>   is the <a href={selectedLocation.nationalPlantURL} className='text-orange-600 underline' target='_blank'>
						{selectedLocation.nationalPlant}
					</a>
				</p>
			</section>
			<div className='h-[480px]'>
				<Map viewport={viewport} setViewport={setViewport} locations={locations} />
			</div>


		</section>
	)
}