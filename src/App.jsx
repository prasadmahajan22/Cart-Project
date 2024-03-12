import './App.css'
import Card from './components/cart/cart'
import Navbar from "./components/Navbar/navbar";
import { useState } from 'react';
function App() {
  const [quantity , setQuantity] = useState(4);
  return (
    <>
      <Navbar quantity = {quantity}/>
      <Card setQuantity = {setQuantity} quantity={quantity}/>
    </>
  )
}

export default App
