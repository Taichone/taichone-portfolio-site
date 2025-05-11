/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "encrypted-tbn0.gstatic.com",
			},
			{
				protocol: "https",
				hostname: "prtimes.jp",
			},
			{
				protocol: "https",
				hostname: "www.tokushima-u.ac.jp",
			},
			{
				protocol: "https",
				hostname: "illustimage.com",
			},
			{
				protocol: "https",
				hostname: "pbs.twimg.com",
			},
			{
				protocol: "https",
				hostname: "images.seeklogo.com",
			},
			{
				protocol: "https",
				hostname: "coupon.rakuten.co.jp",
			},
			{
				protocol: "https",
				hostname: "kunitori-jp.net",
			},
		],
	},
};

module.exports = nextConfig;
