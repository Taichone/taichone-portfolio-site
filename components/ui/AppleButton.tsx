import type React from "react";
import { twMerge } from "tailwind-merge";

// カラープリセットの定義
const colorPresets = {
	blue: "#0071e3",
	black: "#000000",
	white: "#ffffff",
	red: "#ff3b30",
	green: "#34c759",
};

type AppleButtonProps = {
	children: React.ReactNode;
	color?: string | keyof typeof colorPresets;
	className?: string;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	textColor?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function AppleButton({
	children,
	color = "blue", // デフォルトのAppleブルー
	className = "",
	onClick,
	type = "button",
	textColor = "white",
	...props
}: AppleButtonProps) {
	// カラープリセットまたはカスタムカラーを取得
	const buttonColor = colorPresets[color as keyof typeof colorPresets] || color;

	// インラインスタイルでカスタム色を適用
	const buttonStyle = {
		backgroundColor: buttonColor,
		color: textColor,
	};

	return (
		<button
			type={type}
			onClick={onClick}
			style={buttonStyle}
			className={twMerge(
				"text-base leading-[1.125] font-medium tracking-[-0.01em] py-3 px-6 rounded-[980px] transition-all duration-200 ease-in-out",
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
}
