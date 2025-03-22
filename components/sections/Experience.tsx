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
		<section className="py-16 bg-gray-50 dark:bg-gray-900" id="experience">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold mb-12 text-center">経歴</h2>

				<div className="space-y-12">
					{experiences.map((experience) => (
						<div
							key={experience.id}
							className="grid md:grid-cols-4 gap-6 items-start"
						>
							<div className="md:col-span-1">
								<p className="text-gray-600 dark:text-gray-400">
									{experience.period}
								</p>
							</div>
							<div className="md:col-span-3">
								<h3 className="text-xl font-semibold mb-2">
									{experience.affiliation}
								</h3>
								<p className="text-gray-700 dark:text-gray-300 mb-2">
									{experience.role}
								</p>
								<p className="text-gray-600 dark:text-gray-400">
									{experience.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
