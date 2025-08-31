import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { generateGlobalMetadata } from "@/utils/metadata"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// - SEO METADATA ------------------------------------------------------------------
export const metadata = generateGlobalMetadata()

export default function RootLayout({ children }) {
  return (
    <html lang='it'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* - HEADER ------------------ */}
        <nav className='flex items-center gap-2 bg-base-300'>
          <Link href='/'>Home</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/blog/posts/97'>Post 97</Link>
          <Link href='/blog/tech/33'>Tech 33</Link>
          {/* <Link replace />  ---> sostituisce la pagina ocrrente dalla "cronologia", quindi rimuove la possibilità di tornare indietro ad esempio con back*/}
          {/* <Link scroll={false />  ---> invece di tornare all'inizio della pagina, mantiene lo scroll corrente al click del Link*/}
          {/* <Link prefetch={false />  ---> impedisce il prefetch della pagina collegata al Link*/}
        </nav>
        {children}
        {/* - FOOTER ------------------ */}
      </body>
    </html>
  )
}
