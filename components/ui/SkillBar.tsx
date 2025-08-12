"use client";

import { useEffect, useState } from "react";

interface SkillBarProps {
	name: string;
	level: number; // 0-100
	className?: string;
	style?: React.CSSProperties;
}

export default function SkillBar({ name, level, className = "", style }: SkillBarProps) {
	const [animatedLevel, setAnimatedLevel] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => {
			setAnimatedLevel(level);
		}, 200);

		return () => clearTimeout(timer);
	}, [level]);

	return (
		<div className={`flex items-center gap-4 ${className}`} style={style}>
			<div className="min-w-0 flex-shrink-0 w-32">
				<span className="text-sm md:text-base font-medium text-gray-900 dark:text-gray-100">
					{name}
				</span>
			</div>
			
			<div className="flex-grow">
				<div className="relative">
					<div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
						<div 
							className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
							style={{ width: `${animatedLevel}%` }}
						/>
					</div>
					<div className="absolute right-0 -top-6">
						<span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
							{level}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}