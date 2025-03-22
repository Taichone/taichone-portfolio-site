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

// バリアントの定義
type ButtonVariant = "filled" | "outlined" | "text";

type AppleButtonProps = {
	children: React.ReactNode;
	color?: string | keyof typeof colorPresets;
	className?: string;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	textColor?: string;
	variant?: ButtonVariant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function AppleButton({
	children,
	color = "blue", // デフォルトのAppleブルー
	className = "",
	onClick,
	type = "button",
	textColor,
	variant = "filled", // デフォルトは filled
	...props
}: AppleButtonProps) {
	// カラープリセットまたはカスタムカラーを取得
	const buttonColor = colorPresets[color as keyof typeof colorPresets] || color;

	// インラインスタイルでカスタム色を適用
	const buttonStyle: React.CSSProperties = {};

	// バリアントに基づいてスタイルを設定
	switch (variant) {
		case "filled":
			buttonStyle.backgroundColor = buttonColor;
			buttonStyle.color = textColor || (color === "white" ? "black" : "white");
			break;
		case "outlined":
			buttonStyle.borderColor = buttonColor;
			buttonStyle.color = buttonColor;
			buttonStyle.backgroundColor = "transparent";
			buttonStyle.borderWidth = "1px";
			buttonStyle.borderStyle = "solid";
			break;
		case "text":
			buttonStyle.color = buttonColor;
			buttonStyle.backgroundColor = "transparent";
			break;
	}

	// バリアントごとのクラス
	const variantClasses = {
		filled: "shadow-sm hover:brightness-95 active:brightness-90",
		outlined: "hover:bg-opacity-10 active:bg-opacity-20",
		text: "hover:bg-opacity-10 active:bg-opacity-20",
	};

	return (
		<button
			type={type}
			onClick={onClick}
			style={buttonStyle}
			className={twMerge(
				"text-base leading-[1.125] font-medium tracking-[-0.01em] py-3 px-6 rounded-[980px] transition-all duration-200 ease-in-out",
				variantClasses[variant],
				variant === "text" && "px-4",
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
}
