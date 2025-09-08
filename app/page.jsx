/** biome-ignore-all lint/correctness/useUniqueElementIds: unique ids */
// import Link from "next/link"
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

// import { Alert, AlertDescription, AlertTitle } from "@/app/components/ui/alert";

// import {
// 	Avatar,
// 	AvatarFallback,
// 	AvatarImage,
// } from "@/app/components/ui/avatar";

// import { Badge } from "@/app/components/ui/badge";

// import {
// 	Breadcrumb,
// 	BreadcrumbItem,
// 	BreadcrumbLink,
// 	BreadcrumbList,
// 	BreadcrumbMore,
// 	BreadcrumbPage,
// 	BreadcrumbSeparator,
// } from "@/app/components/ui/breadcrumb";

// import { Button } from "@/app/components/ui/button";

// import {
// 	Card,
// 	CardAction,
// 	CardContent,
// 	CardDescription,
// 	CardFooter,
// 	CardHeader,
// 	CardTitle,
// } from "@/app/components/ui/card";

// import {
// 	Carousel,
// 	CarouselContent,
// 	CarouselItem,
// 	CarouselNext,
// 	CarouselPrevious,
// } from "@/app/components/ui/carousel";

// import { Checkbox } from "@/app/components/ui/checkbox";
// import { Label } from "@/app/components/ui/label";

// import {
// 	Dialog,
// 	DialogContent,
// 	DialogDescription,
// 	DialogFooter,
// 	DialogHeader,
// 	DialogTitle,
// 	DialogTrigger,
// } from "@/app/components/ui/dialog";

// import {
// 	HoverCard,
// 	HoverCardContent,
// 	HoverCardTrigger,
// } from "@/app/components/ui/hover-card";

// import { Input } from "@/app/components/ui/input"

// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSeparator,
//   InputOTPSlot,
// } from "@/app/components/ui/input-otp"

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/app/components/ui/navigation-menu"

import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/app/components/ui/pagination";

export default function Home() {
	return (
		<div className="container-full h-[50vh] perfect-center gap-10">
			<h1 className="font-h1 text-base-soft-content">Hello World!</h1>
			<div className="md:w-1/2 w-[92%] mx-auto perfect-center gap-4">
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
				{/* <Alert variant="default">
					<AlertTitle>Heads up!</AlertTitle>
					<AlertDescription>
						You can add components and dependencies to your app using the cli.
					</AlertDescription>
				</Alert> */}

				{/* - Avatar ----------------------------- */}
				{/* <div className="flex items-center -space-x-4">
					<Avatar>
						<AvatarImage src="https://images.unsplash.com/photo-1728887823143-d92d2ebbb53a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<Avatar>
						<AvatarImage src="https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</div> */}

				{/* - Badge ----------------------------- */}
				{/* <Badge variant="default">Badge</Badge>
				<Badge asChild variant="default">
					<a href="/">link</a>
				</Badge> */}

				{/* - Breadcrumb ----------------------------- */}
				{/* <Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href="/">Home</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbMore />
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink href="/components">Components</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb> */}

				{/* - Button ----------------------------- */}

				{/* <Button color="accent" variant="default" size="default">
					<ArrowBigRight size={12} strokeWidth={2} className="-ml-1" />
					Button
				</Button> */}

				{/* - Card ----------------------------- */}
				{/* <Card className="max-sm:w-full w-72 h-fit">
					<CardContent>
						<figure className="aspect-video relative rounded-md overflow-hidden">
							<Image
								alt="immagine di esempio"
								className="object-cover"
								fill
								src="https://images.unsplash.com/photo-1753262081045-ff9b365ef62a?q=80&w=2469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							/>
						</figure>
					</CardContent>
					<CardHeader>
						<Badge variant="secondary">Badge</Badge>
						<div>
							<CardTitle>Card Title</CardTitle>
							<CardDescription>
								Card Description Card desc C Descr Ca C Card desc Card Descr Ca
							</CardDescription>
						</div>
					</CardHeader>
					<CardFooter>
						<Button color="primary" variant="default" size="default">
							Card Action
						</Button>
					</CardFooter>
				</Card> */}

				{/* - Carousel ----------------------------- */}
				{/* <Carousel
					opts={{
						loop: true,
						slidesToScroll: 1,
					}}
					orientation="horizontal"
					className="w-full"
				>
					<CarouselContent>
						<CarouselItem>
							<div className="size-full perfect-center bg-custom-primary-soft text-custom-primary-soft-content rounded-lg">
								Slide 1
							</div>
						</CarouselItem>
						<CarouselItem>
							<div className="size-full perfect-center bg-custom-secondary-soft text-custom-secondary-soft-content rounded-lg">
								Slide 2
							</div>
						</CarouselItem>
					</CarouselContent>
					<div className="w-full flex items-center justify-between">
						<CarouselPrevious />
						<CarouselNext />
					</div>
				</Carousel> */}

				{/* - Checkbox ----------------------------- */}
				{/* <div className="flex items-center gap-2">
					<Checkbox id="email" />
					<Label htmlFor="email">Your email address</Label>
				</div> */}

				{/* - Dialog ----------------------------- */}
				{/* <Dialog>
					<DialogTrigger>Open</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Are you absolutely sure?</DialogTitle>
							<DialogDescription>
								This action cannot be undone. This will permanently delete your
								account and remove your data from our servers.
							</DialogDescription>
						</DialogHeader>
						<DialogFooter>
							<Button color="error" variant="default" size="default">
								Button
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog> */}

				{/* - Hover card ----------------------------- */}
				{/* <HoverCard>
					<HoverCardTrigger>Hover</HoverCardTrigger>
					<HoverCardContent>
						The React Framework, created and maintained by @vercel.
					</HoverCardContent>
				</HoverCard> */}

				{/* - Input ----------------------------- */}
				{/* <div className='flex flex-col gap-2'>
          <Input type='file' />
          <Input placeholder='Scrivi qui...' type='text' />
        </div> */}

				{/* - Input OTP ----------------------------- */}
				{/* <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP> */}

				{/* - Nav Menu ----------------------------- */}
				{/* <NavigationMenu className='w-full' viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item 1</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Nav Link 1</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item 2</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Nav Link 1</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href='/'>Nav Link 3</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu> */}

				{/* - Pagination ------------------------- */}
				<Pagination>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious href="#" />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">1</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<PaginationNext href="#" />
						</PaginationItem>
					</PaginationContent>
				</Pagination>

				{/* - LOCAL IMG ---------------------------------------------------------------------- */}

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
