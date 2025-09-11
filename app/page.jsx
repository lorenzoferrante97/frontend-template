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

// import {
// 	Pagination,
// 	PaginationContent,
// 	PaginationEllipsis,
// 	PaginationItem,
// 	PaginationLink,
// 	PaginationNext,
// 	PaginationPrevious,
// } from "@/app/components/ui/pagination";

// import { Label } from "@/app/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";

// import { ScrollArea } from "@/app/components/ui/scroll-area";

// import {
// 	Select,
// 	SelectContent,
// 	SelectGroup,
// 	SelectItem,
// 	SelectLabel,
// 	SelectSeparator,
// 	SelectTrigger,
// 	SelectValue,
// } from "@/app/components/ui/select";

// import {
// 	Sheet,
// 	SheetContent,
// 	SheetDescription,
// 	SheetHeader,
// 	SheetTitle,
// 	SheetTrigger,
// } from "@/app/components/ui/sheet";

// import { Skeleton } from "@/app/components/ui/skeleton";

// import { Slider } from "@/app/components/ui/slider";

// import ToastSection from "./components/ToastSection";

// import { Switch } from "@/app/components/ui/switch";

// import {
// 	Tabs,
// 	TabsContent,
// 	TabsList,
// 	TabsTrigger,
// } from "@/app/components/ui/tabs";

// import { Textarea } from "@/app/components/ui/textarea";

// import { Toggle } from "@/app/components/ui/toggle";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

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
				{/* <Pagination>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious href="#" />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">1</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">2</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<PaginationNext href="#" />
						</PaginationItem>
					</PaginationContent>
				</Pagination> */}
				{/* - Radio Group ------------------------- */}
				{/* <RadioGroup defaultValue="option-one">
					<div className="flex items-center gap-2">
						<RadioGroupItem value="option-one" id="option-one" />
						<Label htmlFor="option-one">Option One</Label>
					</div>
					<div className="flex items-center gap-2">
						<RadioGroupItem value="option-two" id="option-two" />
						<Label htmlFor="option-two">Option Two</Label>
					</div>
				</RadioGroup> */}
				{/* - Scroll Area ------------------------- */}
				{/* <ScrollArea direction="vertical" className="h-[200px] w-[350px]">
					<div className="flex flex-col items-stretch h-max w-full space-y-2">
						<div className="h-[280px] perfect-center bg-base-200">A</div>
						<div className="h-[280px] perfect-center bg-base-200">B</div>
						<div className="h-[280px] perfect-center bg-base-200">C</div>
					</div>
				</ScrollArea> */}
				{/* - Select ------------------------- */}
				{/* <Select>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Theme" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Theme</SelectLabel>
							<SelectItem value="light">Light</SelectItem>
							<SelectItem value="dark">Dark</SelectItem>
							<SelectItem value="system">System</SelectItem>
						</SelectGroup>
						<SelectGroup>
							<SelectLabel>Custom Theme</SelectLabel>
							<SelectItem value="midnight">Midnight</SelectItem>
							<SelectItem value="pastel">Pastel</SelectItem>
							<SelectItem value="solar">Solar</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select> */}
				{/* - Sheet ------------------------- */}
				{/* <Sheet>
					<SheetTrigger>Open</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							<SheetTitle>Are you absolutely sure?</SheetTitle>
							<SheetDescription>
								This action cannot be undone. This will permanently delete your
								account and remove your data from our servers.
							</SheetDescription>
						</SheetHeader>
					</SheetContent>
				</Sheet> */}
				{/* - Skeleton ------------------------- */}
				{/* <Skeleton className="h-[20px] w-[100px] rounded-full" /> */}
				{/* - Slider ------------------------- */}
				{/* <Slider defaultValue={[50]} max={100} min={0} step={1} /> */}

				{/* - Toast ------------------------- */}
				{/* <ToastSection /> */}

				{/* - Switch ------------------------- */}
				{/* <Switch /> */}

				{/* - Tabs ------------------------- */}
				{/* <Tabs defaultValue="account" className="w-[400px]">
					<TabsList>
						<TabsTrigger value="account">Account</TabsTrigger>
						<TabsTrigger value="password">Password</TabsTrigger>
					</TabsList>
					<TabsContent value="account">
						Make changes to your account here.
					</TabsContent>
					<TabsContent value="password">Change your password here.</TabsContent>
				</Tabs> */}

				{/* - Textarea ------------------------- */}
				{/* <Textarea /> */}

				{/* - Toogle ------------------------- */}
				{/* <Toggle variant="outline" size="square">
					B
				</Toggle> */}

				{/* - Toogle Group ------------------------- */}
				<ToggleGroup type="single">
					<ToggleGroupItem value="a">A</ToggleGroupItem>
					<ToggleGroupItem value="b">B</ToggleGroupItem>
					<ToggleGroupItem value="c">C</ToggleGroupItem>
				</ToggleGroup>

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
