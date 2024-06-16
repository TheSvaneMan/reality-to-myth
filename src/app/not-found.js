import Link from 'next/link'

import Image from 'next/image'

export default function NotFound() {
	return (<section className='grid grid-cols-1 gap-2  justify-items-center p-12'>
		<h1 className='text-pink-500 text-4xl'>Whoops, sorry about that. We can&apos;t find that page...</h1>
		<div style={{ width: '128px', height: 'auto' }}>
			<Image style={{ width: '128px', height: 'auto' }} src="/images/fairy/strawberry-fairy-removebg-preview.png" height={72} width={128} alt="strawberry tree fairy " className='floating' />
		</div>
		<Link href="/" className='flex items-center justify-center bg-[#f6731a] text-white p-4 hover:bg-orange-400 hover:shadow-md hover:shadow-orange-200 rounded-md '>Get back to the adventure here!</Link>
	</section>
	)
}