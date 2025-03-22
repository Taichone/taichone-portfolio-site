"use client";

import Link from "next/link";
import { useScrollToSection } from "./utils/scroll";

export default function MainNavigation() {
	const handleScrollToSection = useScrollToSection();

	return (
		<nav className="flex-1 flex justify-between items-center">
			<div className="flex items-center">
				<Link href="/" className="text-xl font-bold">
					TAICHI
				</Link>
			</div>
			<div className="hidden md:flex items-center space-x-8">
				<Link
					href="#experience"
					className="text-sm font-medium hover:text-apple-blue dark:hover:text-apple-blue-light"
					onClick={(e) => handleScrollToSection(e, "experience")}
				>
					経歴
				</Link>
				<Link
					href="#projects"
					className="text-sm font-medium hover:text-apple-blue dark:hover:text-apple-blue-light"
					onClick={(e) => handleScrollToSection(e, "projects")}
				>
					プロジェクト
				</Link>
				<Link
					href="#contact"
					className="text-sm font-medium hover:text-apple-blue dark:hover:text-apple-blue-light"
					onClick={(e) => handleScrollToSection(e, "contact")}
				>
					お問い合わせ
				</Link>
			</div>
		</nav>
	);
}
