"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
	const scrollRef = useRef<HTMLDivElement>(null);
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			if (!scrollRef.current) return;
			
			const container = scrollRef.current;
			const containerWidth = container.clientWidth;
			const scrollLeft = container.scrollLeft;
			const containerCenter = scrollLeft + containerWidth / 2;
			
			// 各カードの中心位置を計算してアクティブなカードを特定
			const cards = Array.from(container.children[0].children) as HTMLElement[];
			let closestIndex = 0;
			let closestDistance = Infinity;
			
			cards.forEach((card, index) => {
				const cardCenter = card.offsetLeft + card.offsetWidth / 2;
				const distance = Math.abs(containerCenter - cardCenter);
				
				if (distance < closestDistance) {
					closestDistance = distance;
					closestIndex = index;
				}
			});
			
			setActiveIndex(closestIndex);
		};

		const scrollElement = scrollRef.current;
		scrollElement?.addEventListener('scroll', handleScroll);
		return () => scrollElement?.removeEventListener('scroll', handleScroll);
	}, [projects.length]);

	const scrollToProject = (index: number) => {
		if (!scrollRef.current) return;
		
		const container = scrollRef.current;
		const cards = Array.from(container.children[0].children) as HTMLElement[];
		const targetCard = cards[index];
		
		if (targetCard) {
			const containerWidth = container.clientWidth;
			const cardCenter = targetCard.offsetLeft + targetCard.offsetWidth / 2;
			const scrollLeft = cardCenter - containerWidth / 2;
			
			container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
		}
	};

	return (
		<section className="py-12 md:py-16" id="projects">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
					Projects
				</h2>

				<div className="overflow-x-auto pb-4 snap-x snap-mandatory" ref={scrollRef}>
					<div className="flex" style={{ width: 'max-content' }}>
						{projects.map((project) => (
							<div
								key={project.id}
								className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md flex flex-col flex-shrink-0 snap-center"
								style={{
									width: 'min(380px, calc(100vw - 4rem))',
									marginLeft: project.id === projects[0].id 
										? 'calc(50vw - min(190px, calc(50vw - 2rem)))' 
										: '1rem',
									marginRight: project.id === projects[projects.length - 1].id 
										? 'calc(50vw - min(190px, calc(50vw - 2rem)))' 
										: '1rem'
								}}
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

				{/* Scroll indicators */}
				<div className="flex justify-center gap-2 mt-6">
					{projects.map((_, index) => (
						<button
							key={index}
							onClick={() => scrollToProject(index)}
							className={`w-2 h-2 rounded-full transition-all duration-300 ${
								activeIndex === index
									? 'bg-gray-800 dark:bg-gray-200 w-6'
									: 'bg-gray-300 dark:bg-gray-600'
							}`}
							aria-label={`プロジェクト ${index + 1} に移動`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
