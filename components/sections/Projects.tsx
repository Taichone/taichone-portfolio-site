import Image from "next/image";
import AppleButton from "../ui/AppleButton";

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
					プロジェクト
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{projects.map((project) => (
						<div
							key={project.id}
							className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
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
							<div className="p-4 md:p-6">
								<h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
									{project.title}
								</h3>
								<p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-3 md:mb-4">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
									{project.tags.map((tag, tagIndex) => (
										<span
											key={`${project.id}-tag-${tagIndex}`}
											className="px-2 md:px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs md:text-sm"
										>
											{tag}
										</span>
									))}
								</div>
								<AppleButton
									color={
										project.id === "project-1"
											? "red"
											: project.id === "project-2"
												? "blue"
												: "green"
									}
									variant={
										project.id === "project-1"
											? "outlined"
											: project.id === "project-2"
												? "filled"
												: "text"
									}
								>
									詳細を見る
								</AppleButton>
							</div>
						</div>
					))}
				</div>

				<div className="mt-8 md:mt-12 text-center">
					<AppleButton color="black" variant="outlined">
						他のプロジェクトを見る
					</AppleButton>
				</div>
			</div>
		</section>
	);
}
