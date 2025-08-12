"use client";

import Image from "next/image";
import Experience, { type ExperienceItem } from "./Experience";
import Skills, { type Skill } from "./Skills";
import Projects, { type ProjectItem } from "./Projects";

interface ExperienceSkillsProjectsProps {
	experiences: ExperienceItem[];
	skills: Skill[];
	projects: ProjectItem[];
}

export default function ExperienceSkillsProjects({ 
	experiences, 
	skills, 
	projects 
}: ExperienceSkillsProjectsProps) {
	return (
		<section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900" id="experience-skills-projects">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Experience Section */}
				<div className="mb-16 md:mb-20">
					<h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
						Experience
					</h2>
					<div className="space-y-6 md:space-y-8">
						{experiences.map((experience) => (
							<div
								key={experience.id}
								className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
							>
								<div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-4">
									<div className="flex flex-row md:flex-col items-center md:items-start gap-3 md:gap-2 md:w-32 flex-shrink-0">
										<div className="w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl overflow-hidden bg-white flex-shrink-0">
											<Image
												src={experience.imageURL}
												alt={experience.affiliation}
												width={64}
												height={64}
												className="w-full h-full object-cover"
											/>
										</div>
										<div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-mono md:text-center">
											{experience.period}
										</div>
									</div>

									<div className="flex-1 min-w-0">
										<div className="flex flex-wrap items-center gap-2 mb-1 md:mb-2">
											<h3 className="text-base md:text-lg font-semibold">
												{experience.role}
											</h3>
											{experience.labels?.map((label, index) => (
												<span
													key={index}
													className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
												>
													{label}
												</span>
											))}
										</div>
										<p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-2 md:mb-3 font-medium">
											{experience.affiliation}
										</p>
										<p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
											{experience.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Skills Section */}
				<div className="mb-16 md:mb-20">
					<h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
						Skills
					</h2>
					<div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
						{skills.map((skill, index) => (
							<div
								key={skill.name}
								className="flex items-center gap-4 animate-fade-in"
								style={{
									animationDelay: `${index * 100}ms`
								} as React.CSSProperties}
							>
								<div className="min-w-0 flex-shrink-0 w-32">
									<span className="text-sm md:text-base font-medium text-gray-900 dark:text-gray-100">
										{skill.name}
									</span>
								</div>
								
								<div className="flex-grow">
									<div className="relative">
										<div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
											<div 
												className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
												style={{ 
													width: `${skill.level}%`,
													transitionDelay: `${index * 100}ms`
												}}
											/>
										</div>
										<div className="absolute right-0 -top-6">
											<span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
												{skill.level}%
											</span>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Projects Section */}
				<div>
					<h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
						Projects
					</h2>
					<Projects projects={projects} />
				</div>
			</div>
		</section>
	);
}