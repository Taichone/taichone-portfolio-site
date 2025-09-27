import Link from "next/link";
import type React from "react";
import AppleButton from "../ui/AppleButton";

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
		<footer
			className="py-12 md:py-16 bg-apple-gray-50 dark:bg-gray-900"
			id="contact"
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Links</h2>

				<div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8">
					{socialLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm md:text-base"
						>
							{link.icon}
							<span className="ml-1">{link.label}</span>
						</Link>
					))}
				</div>

				<div className="mb-8 md:mb-12">
					<AppleButton color="white" textColor="black" variant="text">
						お問い合わせ
					</AppleButton>
				</div>

				<p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
					© {new Date().getFullYear()} {authorName}. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
