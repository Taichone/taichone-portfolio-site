"use client";

import AppleButton from "../ui/AppleButton";

export default function Hero() {
	return (
		<section className="py-20 md:py-32">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
					三木 太智
				</h1>
				<h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
					ソフトウェアエンジニア
				</h2>
				<p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-10">
					2001年徳島県生まれ。8歳から高校まで野球に打ち込み、現在は名古屋大学情報学研究科でコンピュータサイエンス分野における修士研究を行いつつ、スタートアップ企業のソフトウェアエンジニアとしてのお仕事や個人開発を行っております。
				</p>
				<div className="flex justify-center gap-4">
					<AppleButton
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
					</AppleButton>
				</div>
			</div>
		</section>
	);
}
