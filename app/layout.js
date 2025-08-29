import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "Next.js Frontend template",
  description:
    "Starting template for every frontend project made with Next.js, Talwind CSS v4, Motion",
}

export default function RootLayout({ children }) {
  return (
    <html lang='it'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  )
}
