import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'
import '@/styles/globals.css'
import { cn } from '@/utils/utils'
import { Inter } from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(
      'bg-white text-slate-900 antialiased', inter.className
    )}>
      <body className='min-h-screen bg-slate-50 dark:bg-slate-900 antialiased'>
        <Providers>{children}</Providers>

        {/* @ts-expect-error Server Component*/}
        <Navbar />
        <div className="h-40 md:hidden"></div>
      </body>
    </html>
  )
}
