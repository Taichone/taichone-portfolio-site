"use client";

import Image from "next/image";
import AppleButton from "../ui/AppleButton";

export interface ExperienceItem {
	id: string;
	period: string;
	role: string;
	affiliation: string;
	description: string;
	imageURL: string;
	labels?: string[];
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
					Experience
				</h2>

				<div className="space-y-6 md:space-y-8">
					{experiences.map((experience) => (
						<div
							key={experience.id}
							className="flex flex-col md:grid md:grid-cols-5 gap-3 md:gap-4 items-start border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-0 md:border-0 last:border-0 relative"
						>
							{experience.labels && experience.labels.length > 0 && (
								<div className="absolute top-0 right-0 flex flex-wrap gap-1 justify-end md:mt-1">
									{experience.labels.map((label) => (
										<span
											key={`${experience.id}-${label}`}
											className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
										>
											{label}
										</span>
									))}
								</div>
							)}
							<div className="md:col-span-1 hidden md:block">
								<p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
									{experience.period}
								</p>
							</div>
							<div className="flex items-center gap-3 md:col-span-1 md:justify-center">
								<Image
									src={experience.imageURL}
									alt={`${experience.affiliation} logo`}
									width={48}
									height={48}
									className="rounded-full object-cover"
								/>
								<div className="md:hidden flex flex-col">
									<h3 className="text-lg font-semibold">
										{experience.affiliation}
									</h3>
									<p className="text-base text-gray-700 dark:text-gray-300">
										{experience.role}
									</p>
								</div>
							</div>
							<div className="md:col-span-3 flex flex-col">
								<h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-1 hidden md:block">
									{experience.affiliation}
								</h3>
								<p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-1 md:mb-1 hidden md:block">
									{experience.role}
								</p>
								<p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-1 md:mb-1 md:hidden">
									{experience.period}
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
