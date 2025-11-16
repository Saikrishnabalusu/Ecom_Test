import NavBar from '../components/NavBar'
import Card from '../components/Card'
import Banner from '../components/Banner'
import axios from "axios"
import { useEffect, useState } from 'react'
 
function Home() {
  const [products,setProducts] = useState([])
  
  useEffect(()=>{
    
    axios.get('https://fakestoreapi.com/products').then(response => setProducts(response.data))
  },[])

  return (<>
  <NavBar></NavBar>
  <Banner></Banner>
    <div className='flex w-screen h-auto justify-center items-center gap-3 flex-wrap bg-violet-100 py-8 select-none'>
     {products.map( product=>
     <Card  key={product.id} id = {product.id} image={product.image} price={product.price} title={product.title} rating={product.rating.rate}/>) }
    </div>
  </> 
  )
}


export default Home