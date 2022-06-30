import React from 'react'
import Chart from '../../component/chart/Chart'
import FeaturedInfo from '../../component/featuredInfo/FeaturedInfo'
import './home.css'
import {userData} from '../../component/data/data'
function Home() {
  return (
    <div className='home'>
        <FeaturedInfo />
         <Chart title="User Analytics" data={userData} grid dataKey="Active User" />
    </div>
  )
}

export default Home