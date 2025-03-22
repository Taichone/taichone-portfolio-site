"use client";

import MainNavigation from "../MainNavigation";

export default function Header() {
	return (
		<header className="sticky top-0 z-50 glass-effect bg-white/90 dark:bg-black/90 border-b border-gray-200 dark:border-gray-800">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16 items-center">
					<MainNavigation />
				</div>
			</div>
		</header>
	);
}
