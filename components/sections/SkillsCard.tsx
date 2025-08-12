"use client";

import { type Skill } from "./Skills";

interface SkillsCardProps {
	skills: Skill[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
	return (
		<section className="py-12 md:py-16" id="skills">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
					Skills
				</h2>
				<div className="flex justify-center">
					<div 
						className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
						style={{ width: 'min(380px, calc(100vw - 4rem))' }}
					>
						<div className="p-6 md:p-8">
						<div className="space-y-6 md:space-y-8">
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
					</div>
				</div>
			</div>
		</section>
	);
}