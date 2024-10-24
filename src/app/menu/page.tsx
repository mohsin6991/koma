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
 <main >  
 <h2 >Menu</h2>  
 <ul >  
 {menuItems.map((item, index) => (  
 <li key={index} >  
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