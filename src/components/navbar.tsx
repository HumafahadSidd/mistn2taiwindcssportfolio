import Link from "next/link"
export default function Navbar(){
    return (
        <div className="flex flex-col justify-center items-center bg-gray-00">
        <header className="w-full text-center p-5 bg-blue-500 text-white">
          <nav className="flex justify-center space-x-6">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/About" className="hover:underline">About</Link>
            <Link href="/Projects" className="hover:underline">Projects</Link>
            <Link href="/Contact" className="hover:underline">Contact</Link>
          </nav>
          <h1 className="text-4xl font-bold mt-4">Welcome to My Portfolio</h1>
          <p className="mt-2">Frontend Developer & Designer</p>
        </header>
  
        </div>
    )

}