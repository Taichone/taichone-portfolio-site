import MainNavigation from "@/components/MainNavigation";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
			{/* ヘッダーナビゲーション */}
			<header className="sticky top-0 z-50 glass-effect bg-white/90 dark:bg-black/90 border-b border-gray-200 dark:border-gray-800">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between h-16 items-center">
						<MainNavigation />
					</div>
				</div>
			</header>

			{/* ヒーローセクション */}
			<section className="py-20 md:py-32">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
						あなたの名前
					</h1>
					<h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
						ソフトウェアエンジニア
					</h2>
					<p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-10">
						技術とデザインの融合を追求するソフトウェアエンジニア。
						ユーザー体験を向上させるプロダクト開発に情熱を注いでいます。
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<a href="#projects" className="apple-button">
							プロジェクトを見る
						</a>
						<a
							href="#contact"
							className="text-apple-blue dark:text-apple-blue-light font-medium"
						>
							お問い合わせ →
						</a>
					</div>
				</div>
			</section>

			{/* 経歴セクション */}
			<section className="py-16 bg-gray-50 dark:bg-gray-900" id="experience">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold mb-12 text-center">経歴</h2>

					<div className="space-y-12">
						<div className="grid md:grid-cols-4 gap-6 items-start">
							<div className="md:col-span-1">
								<p className="text-gray-600 dark:text-gray-400">2022 - 現在</p>
							</div>
							<div className="md:col-span-3">
								<h3 className="text-xl font-semibold mb-2">
									シニアソフトウェアエンジニア
								</h3>
								<p className="text-gray-700 dark:text-gray-300 mb-2">
									株式会社〇〇
								</p>
								<p className="text-gray-600 dark:text-gray-400">
									主要プロダクトの設計・開発・運用を担当。チームリーダーとして5名のエンジニアをマネジメント。
								</p>
							</div>
						</div>

						<div className="grid md:grid-cols-4 gap-6 items-start">
							<div className="md:col-span-1">
								<p className="text-gray-600 dark:text-gray-400">2019 - 2022</p>
							</div>
							<div className="md:col-span-3">
								<h3 className="text-xl font-semibold mb-2">
									ソフトウェアエンジニア
								</h3>
								<p className="text-gray-700 dark:text-gray-300 mb-2">
									株式会社△△
								</p>
								<p className="text-gray-600 dark:text-gray-400">
									Webアプリケーションのフロントエンドとバックエンドの開発に従事。
								</p>
							</div>
						</div>

						<div className="grid md:grid-cols-4 gap-6 items-start">
							<div className="md:col-span-1">
								<p className="text-gray-600 dark:text-gray-400">2015 - 2019</p>
							</div>
							<div className="md:col-span-3">
								<h3 className="text-xl font-semibold mb-2">大学</h3>
								<p className="text-gray-700 dark:text-gray-300 mb-2">
									〇〇大学 情報工学部
								</p>
								<p className="text-gray-600 dark:text-gray-400">
									コンピュータサイエンスを専攻。
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* プロジェクトセクション */}
			<section className="py-16" id="projects">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold mb-12 text-center">プロジェクト</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
							<div className="aspect-video bg-gray-100 dark:bg-gray-700 relative">
								{/* プロジェクト画像があれば表示 */}
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">プロジェクト1</h3>
								<p className="text-gray-600 dark:text-gray-400 mb-4">
									プロジェクトの簡単な説明文をここに入れます。
								</p>
								<div className="flex gap-2">
									<span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
										React
									</span>
									<span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
										TypeScript
									</span>
								</div>
							</div>
						</div>

						<div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
							<div className="aspect-video bg-gray-100 dark:bg-gray-700 relative">
								{/* プロジェクト画像があれば表示 */}
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">プロジェクト2</h3>
								<p className="text-gray-600 dark:text-gray-400 mb-4">
									プロジェクトの簡単な説明文をここに入れます。
								</p>
								<div className="flex gap-2">
									<span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
										Next.js
									</span>
									<span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
										Tailwind
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* フッター / リンクセクション */}
			<footer className="py-16 bg-apple-gray-50 dark:bg-gray-900" id="contact">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold mb-8">Connect</h2>

					<div className="flex flex-wrap justify-center gap-6 mb-12">
						<Link
							href="https://github.com/yourusername"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								viewBox="0 0 24 24"
								role="img"
								aria-label="GitHub logo"
							>
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
							GitHub
						</Link>

						<Link
							href="https://twitter.com/yourusername"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								viewBox="0 0 24 24"
								role="img"
								aria-label="X (Twitter) logo"
							>
								<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
							</svg>
							X
						</Link>

						<Link
							href="https://www.wantedly.com/id/yourusername"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								viewBox="0 0 24 24"
								role="img"
								aria-label="Wantedly logo"
							>
								<path d="M14.5 24H18V15H14.5V24ZM3 24H14V15H3V24ZM3 13.5H18V9H3V13.5ZM19.5 24H21V9H19.5V24ZM3 7.5H21V3H3V7.5Z" />
							</svg>
							Wantedly
						</Link>

						<Link
							href="https://apps.apple.com/developer/yourusername/id123456789"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								viewBox="0 0 24 24"
								role="img"
								aria-label="App Store logo"
							>
								<path d="M17.0266 12.3517C17.0125 10.1363 18.8507 9.05641 18.9444 8.99997C17.8695 7.4091 16.1925 7.19566 15.6029 7.17268C14.1696 7.02245 12.7818 8.03241 12.0538 8.03241C11.3126 8.03241 10.1773 7.18926 8.9683 7.21797C7.39651 7.24669 5.9403 8.08411 5.12338 9.41642C3.43581 12.1338 4.67634 16.1368 6.30325 18.3205C7.11444 19.3879 8.06382 20.5841 9.31581 20.5323C10.5331 20.4805 10.9915 19.7574 12.4502 19.7574C13.8957 19.7574 14.3194 20.5323 15.59 20.5037C16.901 20.4805 17.7289 19.4222 18.5105 18.343C19.4352 17.1238 19.8053 15.9276 19.8194 15.8759C19.7899 15.8628 17.043 14.8529 17.0266 12.3517Z" />
								<path d="M15.147 5.97645C15.8124 5.14474 16.2568 4.01574 16.1208 2.875C15.1537 2.91518 13.9306 3.52344 13.2369 4.34086C12.6227 5.06112 12.081 6.23569 12.2317 7.32929C13.3206 7.40813 14.4533 6.7953 15.147 5.97645Z" />
							</svg>
							AppStore
						</Link>
					</div>

					<p className="text-gray-600 dark:text-gray-400">
						© {new Date().getFullYear()} あなたの名前. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}
