"use client";

import AppleButton from "../ui/AppleButton";

export default function Hero() {
	return (
		<section className="py-12 md:py-20 lg:py-32">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 md:mb-4">
					三木 太智
				</h1>
				<h2 className="text-lg md:text-xl lg:text-3xl text-gray-600 dark:text-gray-400 mb-6 md:mb-8">
					MIKI Taichi
				</h2>
				<p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 md:mb-8">
					Apple製品向けアプリを開発している大学院生です <br></br>
					2026年より東京で働きます
				</p>
				<div className="mt-6 md:mt-8 text-center">
					<AppleButton
						onClick={() =>
							window.open("https://www.wantedly.com/id/miki_taichi", "_blank")
						}
						variant="filled"
					>
						Wantedly を見る
					</AppleButton>
				</div>
			</div>
		</section>
	);
}
