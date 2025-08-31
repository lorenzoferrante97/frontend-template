import { Climate_Crisis, Figtree } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { generateGlobalMetadata } from "@/utils/metadata";
import ThemeDropdown from "./components/ThemeDropdown";
import ThemeProvider from "./components/ThemeProvider";

const figtree = Figtree({
	variable: "--font-figtree",
	weight: ["300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	display: "swap", // auto, block, fallback, swap, optional
	fallback: ["serif"],
	subsets: ["latin"],
});

const climateCrisis = Climate_Crisis({
	variable: "--font-climate-crisis",
	weight: ["400"],
	style: ["normal"],
	display: "swap", // auto, block, fallback, swap, optional
	fallback: ["sans-serif"],
	subsets: ["latin"],
});

// - SEO METADATA ------------------------------------------------------------------
export const metadata = generateGlobalMetadata();

export default function RootLayout({ children }) {
	return (
		<html lang="it" suppressHydrationWarning>
			<body className={`${figtree.variable} ${climateCrisis.variable}`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{/* - HEADER ------------------ */}
					<nav className="flex px-4 items-center justify-between gap-2 bg-base-300 h-[8vh]">
						<div>
							<Link href="/">Home</Link>
							<Link href="/blog">Blog</Link>
							<Link href="/blog/posts/97">Post 97</Link>
							<Link href="/blog/tech/33">Tech 33</Link>
						</div>

						<ThemeDropdown />

						{/* <Link replace />  ---> sostituisce la pagina ocrrente dalla "cronologia", quindi rimuove la possibilità di tornare indietro ad esempio con back*/}
						{/* <Link scroll={false />  ---> invece di tornare all'inizio della pagina, mantiene lo scroll corrente al click del Link*/}
						{/* <Link prefetch={false />  ---> impedisce il prefetch della pagina collegata al Link*/}
					</nav>
					{children}
					{/* - FOOTER ------------------ */}
				</ThemeProvider>
			</body>
		</html>
	);
}
