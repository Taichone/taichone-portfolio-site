"use client";

export default function Hero() {
	return (
		<section className="py-20 md:py-32">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
					三木 太智
				</h1>
				<h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
					iOS / Web エンジニア
				</h2>
				<p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-10">
					モバイルおよびWebアプリケーション開発を専門とするソフトウェアエンジニア。
					最新技術を活用して、ユーザー中心の高品質なアプリケーション開発に情熱を注いでいます。
					名古屋大学大学院 情報学研究科
					修士課程で自然言語処理の研究に取り組んでいます。
				</p>
				<div className="flex flex-wrap justify-center gap-4">
					<button
						type="button"
						className="apple-button"
						onClick={() => {
							const element = document.getElementById("projects");
							if (element) {
								window.scrollTo({
									top: element.offsetTop,
									behavior: "smooth",
								});
							}
						}}
					>
						プロジェクトを見る
					</button>
					<button
						type="button"
						className="text-apple-blue dark:text-apple-blue-light font-medium"
						onClick={() => {
							const element = document.getElementById("contact");
							if (element) {
								window.scrollTo({
									top: element.offsetTop,
									behavior: "smooth",
								});
							}
						}}
					>
						お問い合わせ →
					</button>
				</div>
			</div>
		</section>
	);
}
