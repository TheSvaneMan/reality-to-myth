/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'commons.wikimedia.org',
				port: '',
			},
		],
	},
};


export default nextConfig;
