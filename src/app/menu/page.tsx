import Header from '../../components/Header';  
import Footer from '../../components/Footer';  
const menuItems = [  
 { name: 'Spaghetti Carbonara', price: '$12' },  
 { name: 'Margherita Pizza', price: '$10' },  
 { name: 'Caesar Salad', price: '$8' },  
 { name: 'Tiramisu', price: '$6' },  
];  

export default function Menu() {  
 return (  
 <div>  
 <Header />  
 <main className="container mx-auto p-4">  
 <h2 className="text-2xl font-bold mb-4">Menu</h2>  
 <ul className="space-y-2">  
 {menuItems.map((item, index) => (  
 <li key={index} className="flex justify-between">  
 <span>{item.name}</span>  
 <span>{item.price}</span>  
 </li>  
 ))}  
 </ul>  
 </main>  
 <Footer />  
 </div>  
 );  
}