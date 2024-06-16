import Image from 'next/image'

export default function Page() {
	return (
		<section className='grid grid-cols-1 justify-items-center'>
			<div className='flex items-center'>
				<Image
					src="/images/botanical-garden.jpg"
					width={2400}
					height={80}
					priority
					alt="Image of the botanical garden in Aarhus"
				/>
			</div>
			<div className='p-8 max-w-md grid grid-cols-1 gap-4'>

				<h1 className='text-4xl'>
					About Reality to Myth
				</h1>
				<hr />
				<p>
					This work aims to redefine our relationship with nature by fostering kinship with plants,
					emphasizing not just their preservation but transforming our connection to nurture respect and
					acknowledge their agency in the ecological community.
				</p>
				<hr className='mb-4' />
				<a target='_blank' href='/research/Nick_From reality to myth_ migrant plants.pdf' className='flex items-center justify-center border-[#355835] border p-2 hover:bg-[#355835] hover:text-white'>
					read more
				</a>

			</div>
		</section>
	)
}