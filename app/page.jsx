// import Image from "next/image";
// import Script from "next/script";
// import example from "@/assets/img/example.jpg";
// import {
// 	Accordion,
// 	AccordionContent,
// 	AccordionItem,
// 	AccordionTrigger,
// } from "@/app/components/ui/accordion";
// import {
// 	DropdownMenu,
// 	DropdownMenuContent,
// 	DropdownMenuGroup,
// 	DropdownMenuItem,
// 	DropdownMenuLabel,
// 	DropdownMenuSeparator,
// 	DropdownMenuTrigger,
// } from "@/app/components/ui/dropdown-menu";

import { Alert, AlertDescription, AlertTitle } from "@/app/components/ui/alert";

export default function Home() {
	return (
		<div className="container-full h-[50vh] perfect-center gap-10">
			<h1 className="font-h1 text-base-soft-content">Hello World!</h1>
			<div className="w-1/2 mx-auto perfect-center gap-4">
				{/* - ACCORDION ----------------------------- */}
				{/* <Accordion type="single" collapsible>
					<AccordionItem value="item-1">
						<AccordionTrigger>Is it accessible?</AccordionTrigger>
						<AccordionContent>
							Yes. It adheres to the WAI-ARIA design pattern.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>Item Title 2?</AccordionTrigger>
						<AccordionContent>
							Yes. It adheres to the WAI-ARIA design pattern.
						</AccordionContent>
					</AccordionItem>
				</Accordion> */}

				{/* - DROPDOWN ----------------------------- */}
				{/* <DropdownMenu>
					<DropdownMenuTrigger>Open</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuGroup>
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuItem>Profile</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Billing</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuGroup>
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuItem>Profile</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Billing</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu> */}

				{/* - Alert ----------------------------- */}
				<Alert variant="default">
					<AlertTitle>Heads up!</AlertTitle>
					<AlertDescription>
						You can add components and dependencies to your app using the cli.
					</AlertDescription>
				</Alert>

				{/* local image */}
				{/* <figure className="h-52 aspect-[9/16] relative rounded-lg overflow-hidden">
					<Image
						alt="immagine di esempio"
						className="object-cover"
						fill
						placeholder="blur"
						src={example}
					/>
				</figure> */}
				{/* url image */}
				{/* <figure className="h-52 aspect-[9/16] relative rounded-lg overflow-hidden">
					<Image
						alt="immagine di esempio"
						className="object-cover"
						fill
						src="https://images.unsplash.com/photo-1753262081045-ff9b365ef62a?q=80&w=2469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					/>
				</figure> */}
			</div>

			{/* - SCRIPTS ---------------------------------------------------------------------- */}

			{/* <Script
      onLoad={() => callbackOnLoad()}
      onError={() => callbackOnError()}
      src='link dello script'
      strategy='afterInteractive' dopo che la pagina è interattiva, per analytics, widget...
      - 'beforeInteractive' prima del rendering, per script essenziali al funzionamento
      - 'lazyOnLoad' dopo il caricamento completo della page, per script non essenziali
      /> */}
		</div>
	);
}
