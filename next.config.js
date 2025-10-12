/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "kunitori-jp.net",
			},
		],
	},
};

module.exports = nextConfig;
