"use client"

import { useEffect, useRef, useState } from "react";

// Qr Scanner
import QrScanner from "qr-scanner";
import { useRouter } from 'next/navigation';

import Image from 'next/image';

const QrReader = () => {
	// QR States
	const scanner = useRef();
	const videoEl = useRef(null);
	const qrBoxEl = useRef(null);
	const [qrOn, setQrOn] = useState(true);


	const [buttonClicked, setButtonClicked] = useState(false);
	// Result
	const [scannedResult, setScannedResult] = useState("");

	// Success
	const onScanSuccess = (result) => {
		// 🖨 Print the "result" to browser console.
		console.log(result);
		// ✅ Handle success.
		// 😎 You can do whatever you want with the scanned result.
		setScannedResult(result?.data);
	};

	// Fail
	const onScanFail = (err) => {
		// 🖨 Print the "err" to browser console.
		console.log(err);
	};

	const router = useRouter();

	useEffect(() => {
		const videoElement = videoEl?.current;
		if (videoElement && !scanner.current) {
			// 👉 Instantiate the QR Scanner
			scanner.current = new QrScanner(videoElement, onScanSuccess, {
				onDecodeError: onScanFail,
				// 📷 This is the camera facing mode. In mobile devices, "environment" means back camera and "user" means front camera.
				preferredCamera: "environment",
				// 🖼 This will help us position our "QrFrame.svg" so that user can only scan when qr code is put in between our QrFrame.svg.
				highlightScanRegion: true,
				// 🔥 This will produce a yellow (default color) outline around the qr code that we scan, showing a proof that our qr-scanner is scanning that qr code.
				highlightCodeOutline: true,
				// 📦 A custom div which will pair with "highlightScanRegion" option above 👆. This gives us full control over our scan region.
				overlay: qrBoxEl?.current || undefined,
			});

			// 🚀 Start QR Scanner
			scanner?.current
				?.start()
				.then(() => setQrOn(true))
				.catch((err) => {
					if (err) setQrOn(false);
				});
		}

		// 🧹 Clean up on unmount.
		// 🚨 This removes the QR Scanner from rendering and using camera when it is closed or removed from the UI.
		return () => {
			if (!videoElement) {
				scanner?.current?.stop();
			}
		};
	}, []);

	// ❌ If "camera" is not allowed in browser permissions, show an alert.
	useEffect(() => {
		if (!qrOn)
			alert(
				"Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload."
			);
	}, [qrOn]);

	function filterLocalhost(urlString) {
		// Define the regular expression pattern to match 'http://127.0.0.1'
		const pattern = "https://magpie-famous-roughly.ngrok-free.app/";

		// Replace all occurrences of the pattern with an empty string
		const filteredString = urlString.replace(pattern, '');

		return filteredString;
	}

	const goToPlant = () => {
		const resultString = filterLocalhost(scannedResult)
		setButtonClicked(true);
		router.push(resultString);
	}

	return (
		<section className='grid grid-cols-1 gap-2'>
			{
				scannedResult && <button onClick={() => goToPlant()} className='flex items-center justify-center bg-[#355835] text-white px-4 mx-4 rounded-md h-[80px]'>
					Experience the Myth!
				</button>
			}
			<div className="qr-reader">
	
				
				<hr className='mb-8' />
				<video ref={videoEl} className='h-[80px]'></video>

				<div ref={qrBoxEl} className="qr-box">
					<Image
						src="/images/qr_code/vector-qr-code-illustration.jpg"
						alt="QR Frame"
						width={240}
						height={240}
						className="qr-frame opacity-25"
					/>
				</div>
			</div>
		</section>
	
	);
};

export default QrReader;