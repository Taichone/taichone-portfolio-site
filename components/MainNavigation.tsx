"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useScrollToSection } from "./utils/scroll";

export default function MainNavigation() {
	const handleScrollToSection = useScrollToSection();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	// ESCキーでメニューを閉じる
	useEffect(() => {
		const handleEscKey = (e: KeyboardEvent) => {
			if (e.key === "Escape" && isMenuOpen) {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener("keydown", handleEscKey);
		return () => window.removeEventListener("keydown", handleEscKey);
	}, [isMenuOpen]);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const navLinks = [
		{ href: "#experience", label: "経歴", id: "experience" },
		{ href: "#projects", label: "プロジェクト", id: "projects" },
		{ href: "#contact", label: "お問い合わせ", id: "contact" },
	];

	return (
		<nav className="flex-1 flex justify-between items-center">
			<div className="flex items-center">
				<Link href="/" className="text-xl font-bold">
					Taichone
				</Link>
			</div>

			{/* デスクトップナビゲーション */}
			<div className="hidden md:flex items-center space-x-8">
				{navLinks.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						className="text-sm font-medium hover:text-apple-blue dark:hover:text-apple-blue-light transition-colors duration-200"
						onClick={(e) => handleScrollToSection(e, link.id)}
					>
						{link.label}
					</Link>
				))}
			</div>

			{/* モバイルメニューボタン */}
			<div className="md:hidden">
				<button
					type="button"
					className="p-2 focus:outline-none transition-transform duration-300 ease-in-out"
					onClick={toggleMenu}
					aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
					aria-expanded={isMenuOpen}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 transition-transform duration-300 ease-in-out"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
						style={{
							transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
						}}
					>
						{isMenuOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						)}
					</svg>
				</button>
			</div>

			{/* モバイルメニュー（常に存在するが、高さとopacityで表示/非表示を制御） */}
			<div
				ref={menuRef}
				className={`absolute top-16 left-0 right-0 bg-white dark:bg-black shadow-lg z-50 border-b border-gray-200 dark:border-gray-800 md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
					isMenuOpen
						? "max-h-64 opacity-100 translate-y-0"
						: "max-h-0 opacity-0 -translate-y-2"
				}`}
			>
				<div className="flex flex-col p-4 space-y-4">
					{navLinks.map((link, index) => (
						<Link
							key={link.href}
							href={link.href}
							className={`text-sm font-medium hover:text-apple-blue dark:hover:text-apple-blue-light py-2 transition-all duration-300 ease-in-out ${
								isMenuOpen
									? "translate-x-0 opacity-100"
									: "translate-x-4 opacity-0"
							}`}
							style={{
								transitionDelay: `${index * 50}ms`,
							}}
							onClick={(e) => {
								handleScrollToSection(e, link.id);
								closeMenu();
							}}
						>
							{link.label}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
}
