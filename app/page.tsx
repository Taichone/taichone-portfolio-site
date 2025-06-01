import Experience, {
	type ExperienceItem,
} from "../components/sections/Experience";
import Footer, { type SocialLink } from "../components/sections/Footer";
import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import Projects, { type ProjectItem } from "../components/sections/Projects";

// 経歴データ
const experienceData: ExperienceItem[] = [
	{
		id: "exp-ly-parttime",
		period: "2025.6 - 2026.1",
		role: "エンジニア（アルバイト）",
		affiliation: "LINEヤフー株式会社",
		description: "ソフトウェアエンジニア (iOS, Android)",
		imageURL:
			"https://pbs.twimg.com/profile_images/1708099235982479360/7A6D4yj-_400x400.png",
		labels: ["現在"],
	},
	{
		id: "exp-nu",
		period: "2024.4 - 2026.3",
		role: "大学院情報学研究科",
		affiliation: "名古屋大学",
		description: "情報システム学専攻 博士前期課程",
		imageURL:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoLB_fCiGrt78r2qLv3mbVTBrAlDm9eDxESQ&s",
		labels: ["現在"],
	},
	{
		id: "exp-fristi",
		period: "2025.1 -",
		role: "エンジニア",
		affiliation: "株式会社FriSti",
		description: "Webサービス開発, LLMアプリケーション開発",
		imageURL:
			"https://prtimes.jp/data/corp/110515/logo/sp-cef0e2e42a9fb354c2eb6a21fa8c007a-37d80c0ba8c7403e028c4ab778239743.jpeg?auto=avif",
		labels: ["現在"],
	},
	{
		id: "exp-internship",
		period: "2024.7 - 2024.10",
		role: "インターンシップ",
		affiliation: "楽天グループ株式会社 ほか",
		description:
			"楽天グループ株式会社\n株式会社サイバーエージェント\nサイボウズ株式会社\n株式会社ゆめみ\nSansan株式会社\nチームラボ株式会社",
		imageURL: "https://coupon.rakuten.co.jp/img/logos/2.png?20181211",
	},
	{
		id: "exp-8",
		period: "2021.6 - 2022.12",
		role: "iOSエンジニア（アルバイト）",
		affiliation: "株式会社L is B",
		description: "自社サービス「direct」iOS版の機能追加及び改善",
		imageURL:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsn_Yj8o5IbfiFfa5YF5wRZWR8nUSBTZYt1jGyeQJzT7WRmWgOC1UJtwvK4d7NuzUn-wg&usqp=CAU",
	},
	{
		id: "exp-7",
		period: "2020.4 - 2024.3",
		role: "理工学部理工学科",
		affiliation: "徳島大学",
		description: "知能情報システムコース",
		imageURL: "https://www.tokushima-u.ac.jp/fs/1/8/6/2/1/1/_/gakusyo_mini.jpg",
	},
	{
		id: "exp-9",
		period: "2017.4 - 2020.3",
		role: "硬式野球部",
		affiliation: "徳島県立脇町高校",
		description: "内野手（ショート）",
		imageURL:
			"https://kunitori-jp.net/wp-content/uploads/2019/03/symbol_tokushima.jpg",
	},
];

// プロジェクトデータ
const projectsData: ProjectItem[] = [
	{
		id: "project-productivity",
		title: "生産性向上の仕組みづくり",
		description:
			"生産性の向上や習慣化をサポートする仕組みについて日々考えています。未来の自分の意志の力を過信せず、仕組みで解決することを大切にしています。",
		tags: [
			"Swift",
			"TypeScript",
			"Shell",
			"Notion",
			"Raycast",
			"Dify",
			"Cursor",
			"Obsidian",
		],
		imageUrl: "/images/img_productivity.png",
	},
	{
		id: "project-concurrency",
		title: "並列分散処理",
		description:
			"Swift Concurrency を用いた並列化についての研究。Instruments でパフォーマンスを測定しながら、興味本位でまったりと調査しています。",
		tags: [
			"Swift",
			"Concurrency",
			"並列分散処理",
			"Instruments",
			"パフォーマンス向上",
		],
		imageUrl: "/images/img_concurrency.png",
	},
	{
		id: "project-nlp",
		title: "自然言語処理",
		description:
			"読点を挿入する言語モデルを制作しました。音声認識により生成されたテキストへの読点挿入に最適です。ユーザーの読点挿入位置の傾向を、テキストのみから簡単に学習させておくことができます。",
		tags: ["自然言語処理", "機械学習", "Transformers", "Python", "PyTorch"],
		imageUrl: "/images/img_comma_model.png",
	},
	{
		id: "project-ymtt",
		title: "ゆめたて",
		description:
			"チャットを通じて、AIと共に理想の住まいの設計図を創り上げていくWebサービス。あなたが家に求める想いを、ゆめたてと一緒に探していきましょう。",
		tags: ["Next.js", "NestJS", "TypeScript", "FastAPI", "Python"],
		imageUrl: "/images/img_yumetate.png",
	},
];

// ソーシャルリンクデータ
const socialLinksData: SocialLink[] = [
	{
		href: "https://github.com/Taichone",
		label: "GitHub",
		icon: (
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
		),
	},
	{
		href: "https://twitter.com/Taichone",
		label: "X",
		icon: (
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
		),
	},
	{
		href: "https://apps.apple.com/jp/developer/taichi-miki/id1611016286",
		label: "AppStore",
		icon: (
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
		),
	},
];

export default function Home() {
	return (
		<div className="min-h-screen bg-white text-black dark:bg-black dark:text-white overflow-x-hidden">
			<Header />
			<Hero />
			<Experience experiences={experienceData} />
			<Projects projects={projectsData} />
			<Footer socialLinks={socialLinksData} authorName="Taichone" />
		</div>
	);
}
