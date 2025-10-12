"use client";

import Image from "next/image";
import {
	type ExperienceItem,
	type InternshipGroupItem,
} from "./Experience";

interface ExperienceOnlyProps {
	experiences: (ExperienceItem | InternshipGroupItem)[];
}

export default function ExperienceOnly({ experiences }: ExperienceOnlyProps) {
	return (
		<section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900" id="experience">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
					Experience
				</h2>
				<div className="space-y-6 md:space-y-8">
					{experiences.map((experience) => {
						// Check if this is an InternshipGroupItem
						if ("companies" in experience) {
							const internship = experience as InternshipGroupItem;
							return (
								<div
									key={internship.id}
									className="flex flex-col md:grid md:grid-cols-5 gap-3 md:gap-4 items-start border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-0 md:border-0 last:border-0 relative"
								>
									{internship.labels && internship.labels.length > 0 && (
										<div className="absolute top-0 right-0 flex flex-wrap gap-1 justify-end md:mt-1">
											{internship.labels.map((label) => (
												<span
													key={`${internship.id}-${label}`}
													className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
												>
													{label}
												</span>
											))}
										</div>
									)}
									<div className="md:col-span-1 hidden md:block">
										<p className="text-sm md:text-base text-gray-600 text-gray-400">
											{internship.period}
										</p>
									</div>
									<div className="md:col-span-4 flex flex-col gap-3">
										<h3 className="text-lg md:text-xl font-semibold">
											{internship.role}
										</h3>
										<p className="text-sm md:text-base text-gray-600 dark:text-gray-400 md:hidden">
											{internship.period}
										</p>
										<div className="flex flex-col gap-2">
											{internship.companies.map((company) => (
												<div
													key={company.id}
													className="flex items-center gap-3"
												>
													<Image
														src={company.imageURL}
														alt={`${company.name} logo`}
														width={48}
														height={48}
														className="rounded-full object-cover flex-shrink-0"
													/>
													<span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
														{company.name}
													</span>
												</div>
											))}
										</div>
									</div>
								</div>
							);
						}

						// Regular ExperienceItem
						const exp = experience as ExperienceItem;
						return (
							<div
								key={exp.id}
								className="flex flex-col md:grid md:grid-cols-5 gap-3 md:gap-4 items-start border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-0 md:border-0 last:border-0 relative"
							>
								{exp.labels && exp.labels.length > 0 && (
									<div className="absolute top-0 right-0 flex flex-wrap gap-1 justify-end md:mt-1">
										{exp.labels.map((label) => (
											<span
												key={`${exp.id}-${label}`}
												className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
											>
												{label}
											</span>
										))}
									</div>
								)}
								<div className="md:col-span-1 hidden md:block">
									<p className="text-sm md:text-base text-gray-600 text-gray-400">
										{exp.period}
									</p>
								</div>
								<div className="flex items-center gap-3 md:col-span-1 md:justify-center">
									<Image
										src={exp.imageURL}
										alt={`${exp.affiliation} logo`}
										width={48}
										height={48}
										className="rounded-full object-cover"
									/>
									<div className="md:hidden flex flex-col">
										<h3 className="text-lg font-semibold">
											{exp.affiliation}
										</h3>
										<p className="text-base text-gray-700 dark:text-gray-300">
											{exp.role}
										</p>
									</div>
								</div>
								<div className="md:col-span-3 flex flex-col">
									<h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-1 hidden md:block">
										{exp.affiliation}
									</h3>
									<p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-1 md:mb-1 hidden md:block">
										{exp.role}
									</p>
									<p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-1 md:mb-1 md:hidden">
										{exp.period}
									</p>
									<p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-2 md:mb-3 whitespace-pre-line">
										{exp.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}