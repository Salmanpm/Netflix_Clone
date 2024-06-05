
import './App.css'

import Login from './Components/Login/Login'
// import Navbar from './Components/NavBar/Navbar'
// import Banner from './Components/Banner/Banner'
// import Rowpost from './Components/Rowpost/Rowpost'

import Home from './Home'
import {Routes,Route} from 'react-router-dom'



function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/home' element={<Home/>} />
    </Routes>
    </>
  )
}

export default App
