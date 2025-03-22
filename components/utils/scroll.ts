"use client";

import { useCallback } from "react";

export const useScrollToSection = () => {
	return useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
		e.preventDefault();
		const element = document.getElementById(id);
		if (element) {
			window.scrollTo({
				top: element.offsetTop,
				behavior: "smooth",
			});
		}
	}, []);
};
