import React from 'react'
import Navbar from './Components/Navbar'
import Cards from './Pages/Cards'
import { Link, Route, BrowserRouter as Router, Routes , } from 'react-router-dom'
import Bholashankar from './Pages/Bholashankar'
import Bro from './Pages/Bro'
import Jailer from './Pages/Jailer'
import Meg from './Pages/Meg2'
import Rocky from './Pages/Rocky'
import MovieTicketBookingForm from './Components/Form'
const App = () => {
  return (
    
    <div>
      
      <Router>

      <Navbar />
        <Routes>
          <Route path='/' element={<Cards />} />
          <Route path='/bhola shankar' element={<Bholashankar/>}/>
          <Route path='/bro' element={<Bro />}/>
          <Route path='/jailer' element={<Jailer />}/>
          <Route path='/meg2' element={<Meg />}/>
          <Route path='/rocky' element={<Rocky />}/>
          <Route path='/form' element={<MovieTicketBookingForm />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App