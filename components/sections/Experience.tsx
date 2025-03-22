"use client";

import AppleButton from "../ui/AppleButton";

export interface ExperienceItem {
	id: string;
	period: string;
	role: string;
	affiliation: string;
	description: string;
}

interface ExperienceSectionProps {
	experiences: ExperienceItem[];
}

export default function Experience({ experiences }: ExperienceSectionProps) {
	return (
		<section
			className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900"
			id="experience"
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
					経歴
				</h2>

				<div className="space-y-6 md:space-y-8">
					{experiences.map((experience) => (
						<div
							key={experience.id}
							className="grid md:grid-cols-4 gap-3 md:gap-4 items-start border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-0 md:border-0 last:border-0"
						>
							<div className="md:col-span-1">
								<p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
									{experience.period}
								</p>
							</div>
							<div className="md:col-span-3">
								<h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-1">
									{experience.affiliation}
								</h3>
								<p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-1 md:mb-1">
									{experience.role}
								</p>
								<p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-2 md:mb-3">
									{experience.description}
								</p>
							</div>
						</div>
					))}
				</div>

				<div className="mt-6 md:mt-8 text-center">
					<AppleButton
						onClick={() =>
							window.open("https://www.wantedly.com/id/miki_taichi", "_blank")
						}
						variant="filled"
					>
						Wantedly Profile を見る
					</AppleButton>
				</div>
			</div>
		</section>
	);
}
