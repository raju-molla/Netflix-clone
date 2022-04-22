import React from 'react'
import Featued from '../../components/featured/Featued'
import List from '../../components/list/List'
import Navbar from '../../components/navbars/Navbar'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Featued type="series" />
        <List />
        <List />
        <List />
        <List />
        

    </div>
  )
}

export default Home