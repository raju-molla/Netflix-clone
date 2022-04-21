import React from 'react'
import Featued from '../../components/featured/Featued'
import Navbar from '../../components/navbars/Navbar'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Featued type="series" />
        

    </div>
  )
}

export default Home