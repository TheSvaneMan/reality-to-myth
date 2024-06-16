import MythicalStoryQuestion from './quiz'
import Image from 'next/image';

export default function Page(id) {
	return (
		<section className='grid grid-cols-1 gap-2 justify-items-center'>
			<div className='max-w-xl'>
				<div className='p-4'>
					<h1 className='text-3xl'>
						Strawberry Tree, Arbutus Unedo
					</h1>
				</div>
				<div className='min-w-screen'>
					<Image
						src="/images/fairy/cute_minchie_default.jpeg"
						className=''
						width={2400}
						height={80}
						priority
						alt="Image of a cute minchie"
					/>
				</div>
				<div className='grid grid-cols-1 gap-4 bg-[#355835] text-white py-4 px-4'>
					<b>
						The Strawberry Tree: A Fruitful Legacy in Myth and Legend
					</b>
					<hr />
					<p className='text-sm py-2'>
						While there is no solid body of myth around it, it is no surprise that such a distinctive tree appears here and there in folklore. Examples include the birth of the Ancient Greek god Hermes under an arbutus (species unspecified), and the long association with the city of Madrid of the image of a bear standing erect to eat fruits from a Strawberry Tree.
						<cite target='_blank' className='italic ml-2'>
							(Sutton, 2021)
						</cite>
					</p>

					<p className='text-sm py-2'>
						Although there isn&apos;t a well-known collection of myths about it, the Strawberry Tree has repeatedly appeared in folklore. For instance, the Ancient Greek god Hermes is said to have been born under an arbutus tree (though the exact species is not specified). Hermes was one of the Twelve goods who lived in Olympus. He watched over messengers and heralds and was connected with travelers, thieves, shepherds, and mystery cults. He was the one who relayed the souls of the dead to the Underworld. Another curiosity about it is that the image of a bear standing upright to eat fruit from a Strawberry Tree has long been associated with the city of Madrid.
						<cite target='_blank' className='italic ml-2'>
							(Kapach, 2023)
						</cite>
						<hr className='mt-8' />
					</p>

				</div>
				<div className='grid grid-cols-1 gap-2 p-4 text-sm'>
					<h5 className='font-bold'>
						Sources:
					</h5>
					<a target='_blank' href='https://www.treesandshrubsonline.org/articles/arbutus/arbutus-unedo/' className='italic'>
						Sutton, J. (2021). Arbutus unedo. Trees and Shrubs Online. Retrieved June 15, 2024
					</a>
					<a target='_blank' href='https://mythopedia.com/topics/hermes' className='italic'>
						Kapach, A. (2023, April 17). Hermes. Mythopedia.
					</a>
				</div>
				<hr />
				<MythicalStoryQuestion />
			</div>
		</section>
	)
}