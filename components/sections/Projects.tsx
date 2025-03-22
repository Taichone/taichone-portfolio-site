import Image from "next/image";

export interface ProjectItem {
	id: string;
	title: string;
	description: string;
	tags: string[];
	imageUrl?: string;
}

interface ProjectsSectionProps {
	projects: ProjectItem[];
}

export default function Projects({ projects }: ProjectsSectionProps) {
	return (
		<section className="py-12 md:py-16" id="projects">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
					Projects
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{projects.map((project) => (
						<div
							key={project.id}
							className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md flex flex-col"
						>
							<div className="aspect-video bg-gray-100 dark:bg-gray-700 relative">
								{project.imageUrl && (
									<Image
										src={project.imageUrl}
										alt={project.title}
										fill
										className="object-cover"
									/>
								)}
							</div>
							<div className="p-4 md:p-6 flex flex-col grow">
								<h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
									{project.title}
								</h3>
								<p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-3 md:mb-4 grow">
									{project.description}
								</p>
								<div className="mb-2" />
								<div className="flex flex-wrap gap-1 md:gap-2 items-end">
									{project.tags.map((tag, tagIndex) => (
										<span
											key={`${project.id}-tag-${tagIndex}`}
											className="px-2 md:px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs md:text-sm"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
