import { Routes, Route, BrowserRouter, NavLink  } from 'react-router-dom'
import './App.css'
import { Weather } from './components/Weather'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {

  return (
      <BrowserRouter>
        <div>
          <nav>
            <NavLink to="/">home</NavLink>
            <NavLink to="/about">about</NavLink>
            <NavLink to="/contact">contact</NavLink>
          </nav>
          <br />
          <br />
          <Weather/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App
