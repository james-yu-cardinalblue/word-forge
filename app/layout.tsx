import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "StreamLine - Simplify Your Workflow",
  description:
    "StreamLine is a powerful SaaS platform that helps you streamline your business processes and boost productivity.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

