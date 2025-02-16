import type { Metadata } from 'next'
import './globals.css'
import FloralDecoration from "./components/FloralDecoration"

export const metadata: Metadata = {
  title: 'Mirzan & Hanani',
  description: 'Created with v0',
  generator: 'v0.dev',
  icons: {
    icon: '/love.png'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden">
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10" 
          style={{backgroundImage: "url('/awan.jpg')"}}
        />
        <div className="fixed inset-0 bg-white/50 backdrop-blur-sm -z-10" />
        <FloralDecoration className="fixed top-0 left-0 opacity-20 -translate-x-1/4 -translate-y-1/4" size="lg" />
        <FloralDecoration className="fixed bottom-0 right-0 opacity-20 translate-x-1/4 translate-y-1/4" rotate size="lg" />
        {children}
      </body>
    </html>
  )
}
