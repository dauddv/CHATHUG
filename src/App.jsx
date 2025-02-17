import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import './Appresponsive.css'
import Home from './components/Home/Home'
import Innerpage from './components/InnerPage/Innerpage'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sideBar/Sidebar'
import Footer from './components/Footer/Footer'
import Todo from './components/todo/Todo'
import PropertyBrain from './components/propertyBrain/PropertyBrain';

function App() {

  const [sideBarInnerisActive , setSideBarInnerisActive] = useState(false)

  let hamburgOnClick = () =>{
    setSideBarInnerisActive(!sideBarInnerisActive)
  }

  return (
    <>
    
    <div className="first">
      <Navbar hamburgOnClick = {hamburgOnClick}/>
      <Sidebar sideBarInnerisActive = {sideBarInnerisActive}/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/innerpage" element={<Innerpage/>} />
      <Route path="/todo" element={<Todo/> } />
      <Route path="/propertybrain" element={<PropertyBrain/> } />
        </Routes>
      </div>
      <Footer/>
          
          
          
         
    </>
  )
}

export default App
