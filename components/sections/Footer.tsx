import Link from "next/link";
import type React from "react";

export interface SocialLink {
	href: string;
	label: string;
	icon: React.ReactNode;
}

interface FooterProps {
	socialLinks: SocialLink[];
	authorName: string;
}

export default function Footer({ socialLinks, authorName }: FooterProps) {
	return (
		<footer className="py-16 bg-apple-gray-50 dark:bg-gray-900" id="contact">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h2 className="text-3xl font-bold mb-8">Connect</h2>

				<div className="flex flex-wrap justify-center gap-6 mb-12">
					{socialLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
						>
							{link.icon}
							{link.label}
						</Link>
					))}
				</div>

				<p className="text-gray-600 dark:text-gray-400">
					© {new Date().getFullYear()} {authorName}. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
