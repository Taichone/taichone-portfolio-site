"use client";

import Skills, { type Skill } from "./Skills";
import Projects, { type ProjectItem } from "./Projects";

interface SkillsAndProjectsProps {
	skills: Skill[];
	projects: ProjectItem[];
}

export default function SkillsAndProjects({ skills, projects }: SkillsAndProjectsProps) {
	return (
		<section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900/50" id="skills-projects">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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