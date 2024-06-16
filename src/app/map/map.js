"use client"

import ReactMapGL, { Marker } from "react-map-gl";
import { useState } from 'react';
import Image from 'next/image';

export default function Map({ locations }) {
	const [viewport, setViewport] = useState({
		latitude: 41.4545, // Faf's latitude
		longitude: -8.1889, // Faf's longitude
		zoom: 6, // Default zoom level
		width: "100vw",
		height: "100vh"
	});


	const handleOnClick = () => {
		console.log("clicked")
	}

	const handleViewportChange = (nextViewport) => {
		setViewport(nextViewport);
	};


	return (
		<ReactMapGL

			{...viewport}
			accessToken="pk.eyJ1IjoidGhlc3ZhbmVtYW4iLCJhIjoiY2x4aGpwMzc0MTNjODJpczZ2YmM2ODZuayJ9.P-iMwsDtdhGZGhmgV084QQ"
			mapboxApiAccessToken="pk.eyJ1IjoidGhlc3ZhbmVtYW4iLCJhIjoiY2x4aGpwMzc0MTNjODJpczZ2YmM2ODZuayJ9.P-iMwsDtdhGZGhmgV084QQ"
			mapboxAccessToken="pk.eyJ1IjoidGhlc3ZhbmVtYW4iLCJhIjoiY2x4aGpwMzc0MTNjODJpczZ2YmM2ODZuayJ9.P-iMwsDtdhGZGhmgV084QQ"
			mapStyle="mapbox://styles/thesvaneman/clxhl26xv008w01pc4h4ihdho"
			onMove={evt => handleViewportChange(evt.viewState)}
			onZoom={evt => handleViewportChange(evt.viewState)}
			onMoveEnd={evt => handleViewportChange(evt.viewState)}
			onZoomEnd={evt => handleViewportChange(evt.viewState)}
			interactive={true}
			>
				{locations.map((location) => (
					<Marker
						key={location.id}
						latitude={location.latitude}
						longitude={location.longitude}
						onClick={handleOnClick}
					>
						<Image src="/images/marker/geo-marker.png" width={48} height={48} alt="place marker" />
					</Marker>
				))}
			</ReactMapGL>
	)
}