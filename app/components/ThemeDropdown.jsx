"use client";

import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";

export default function ThemeDropdown() {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				className="bg-custom-neutral-soft border-custom-neutral-soft-content/10 border rounded-md"
				asChild
			>
				<button
					className="size-8 max-lg:size-12 perfect-center relative"
					type="button"
				>
					<SunIcon className="dark:scale-0" weight="fill" size={12} />
					<MoonIcon
						className="absolute absolute-center scale-0 dark:scale-100"
						weight="fill"
						size={12}
					/>
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme("light")}>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
