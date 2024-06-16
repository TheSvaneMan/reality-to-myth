import plants from "../data/plants"
import Image from 'next/image'

export default function Page() {
	return (
		<section>

			{
				plants.map((plant, i) => {
					const _url = plant.image.replace('https://commons.wikimedia.org', '')
					return (
						<li key={plant.name + "-" + i} value={plant.name}>
							<span>
								{plant.name}
							</span>
							<Image
								src={plant.image}
								className='rounded-full ml-4'
								width={40}
								height={80}
								priority
								alt="Image of a plant found in the botanical garden in Aarhus"
							/>
						</li>
					)
				})
			}
		</section>
	)
}