"use client";

import SkillBar from "../ui/SkillBar";

export interface Skill {
	name: string;
	level: number;
}

interface SkillsProps {
	skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
	return (
		<div>
				<div className="space-y-6 md:space-y-8">
					{skills.map((skill, index) => (
						<SkillBar
							key={skill.name}
							name={skill.name}
							level={skill.level}
							className="animate-fade-in"
							style={{
								animationDelay: `${index * 100}ms`
							} as React.CSSProperties}
						/>
					))}
				</div>
		</div>
	);
}