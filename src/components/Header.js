import Link from "next/link";
export default function Header() {  
    return (  
    <header className="bg-gray-800 text-white p-4">  
    <nav className="container mx-auto flex justify-between">  
    <h1 className="text-xl font-bold">Restaurant Name</h1>  
    <ul className="flex space-x-4">  
    <li><Link href="/" className="text-red-600">Home</Link></li>  
    <li><Link href="/menu">Menu</Link></li>  
    <li><Link href="/about">About</Link></li>  
    <li><Link href="/contact">Contact</Link></li>  
    </ul>  
    </nav>  
    </header>  
    );  
   }