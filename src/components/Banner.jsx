import shoppingbanner2 from '../assets/shoppingbanner2.jpg'

function Banner() {
  return (
     <div className="h-[200px] w-screen relative">
        <img className = "w-full h-full object-fill" src={shoppingbanner2}></img>
         <h1 className="absolute top-[50%] right-10 text-white text-4xl font-bold" > Shop Now</h1>
    </div>
  )
}

export default Banner