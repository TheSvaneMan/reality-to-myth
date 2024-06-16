import QrReader from './qrScanner'
export default function Page() {
	return (
		<section>
			<div className='bg-[#355835] text-white p-4'>
				<h2>
					Experience
				</h2>
			</div>
			<div className='grid grid-cols-1 gap-2 justify-items-center'>
				<QrReader />
			</div>
		</section>
	)
}