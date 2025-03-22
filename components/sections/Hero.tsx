"use client";

export default function Hero() {
	return (
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
