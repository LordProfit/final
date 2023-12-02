import './globals.css'
import { Aldrich } from 'next/font/google'

const aldrich = Aldrich({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

export const metadata = {
  title: 'ArkiTech',
  description: 'Empowering Crypto Communities',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={aldrich.className}>
      <body className={aldrich.className}>{children}</body>
    </html>
  )
}
