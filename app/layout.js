// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Fira_Mono } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from '@/components/theme-provider';

export const metadata = {
  title: "Deep Traders",
  description: "Make Your Home Beautiful",
};

const fira_mono = Fira_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira_mono',
  weight: '400',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={fira_mono.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}