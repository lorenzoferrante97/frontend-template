// utils/metadata.js

const generateGlobalMetadata = () => {
	return {
		// - DEFAULT METADATA --------------------------------------------------------------------

		// - Titolo e descrizione globali ---------------
		title: "Next.js Blog",
		description: "Tutorial e guide su Next.js e sviluppo frontend",
		keywords: ["Next.js", "Frontend", "Template"],

		// - Autore sito ---------------
		author: "Lorenzo Ferrante",

		// - Robots ---------------
		robots: "index, follow", // indicizza e linka tutte le pagine

		// - Colore barra browser ---------------
		// themeColor: "#1a202c",

		// - OPENGRAPH METADATA --------------------------------------------------------------------

		openGraph: {
			siteName: "Next.js Blog",
			locale: "it_IT",
			type: "website", // website, article, book, profile, video.,music.
			// images: [
			// 	{
			// 		url: "/og-default.png", // immagine di fallback per il social share
			// 		width: 1200,
			// 		height: 630,
			// 	},
			// ],
		},

		// - TWITTER METADATA --------------------------------------------------------------------

		// Twitter Card default
		twitter: {
			card: "summary", // summary_large_image, app, player
			// images: ["/og-default.png"],
		},
	};
};

export { generateGlobalMetadata };
