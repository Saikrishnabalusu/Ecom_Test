import axios from "axios"

const url = "https://fakestoreapi.com/products"

Products = () => axios.get({url}/JSON).then((data)=>console.log(data)) 
