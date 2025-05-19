import './globals.css'

export const metadata = {
    title: 'Next.js Boilerplate',
    description: 'A modern Next.js boilerplate with Tailwind CSS',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
} 