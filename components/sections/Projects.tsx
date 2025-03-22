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
		<section className="py-16" id="projects">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold mb-12 text-center">プロジェクト</h2>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<div
							key={project.id}
							className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
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
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
								<p className="text-gray-600 dark:text-gray-400 mb-4">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag, tagIndex) => (
										<span
											key={`${project.id}-tag-${tagIndex}`}
											className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
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
