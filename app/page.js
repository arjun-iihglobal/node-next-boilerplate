export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
                <h1 className="text-4xl font-bold text-center mb-8">
                    Welcome to Next.js Boilerplate
                </h1>
                <p className="text-center text-lg mb-4">
                    Get started by editing <code className="font-mono font-bold">app/page.js</code>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                    <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-semibold mb-2">Next.js</h2>
                        <p>The React framework for production</p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-semibold mb-2">Tailwind CSS</h2>
                        <p>A utility-first CSS framework</p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-semibold mb-2">Node.js</h2>
                        <p>JavaScript runtime environment</p>
                    </div>
                </div>
            </div>
        </main>
    )
} 