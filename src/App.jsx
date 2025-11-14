

import Home from './Pages/Home'
import ErrorPage from './Pages/ErrorPage'
import {Routes, Route} from 'react-router-dom'
import Details from './Pages/Details'
import Header from './components/Header'


function App() {
  

  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Details/:id' element={<Details/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
      
    </>
  )
}

export default App
