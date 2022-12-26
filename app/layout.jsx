import './globals.css'
import { Inter } from '@next/font/google'
const inter = Inter({
  subsets: ['latin'],
  weight: ["400", "700", "800"]
})


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
