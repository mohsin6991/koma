import Link from "next/link";
export default function Header() {  
    return (  
    <header >  
    <nav >  
    <h1 >Restaurant Name</h1>  
    <ul>  
    <li><Link href="/" >Home</Link></li>  
    <li><Link href="/menu">Menu</Link></li>  
    <li><Link href="/about">About</Link></li>  
    <li><Link href="/contact">Contact</Link></li>  
    </ul>  
    </nav>  
    </header>  
    );  
   }