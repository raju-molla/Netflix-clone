import React from 'react'
import Chart from '../../component/chart/Chart'
import FeaturedInfo from '../../component/featuredInfo/FeaturedInfo'
import './home.css'
import {userData} from '../../component/data/data'
import WidgetSm from '../../component/widgetSm/WidgetSm'
import WidgetLg from '../../component/widgetLg/WidgetLg'
function Home() {
  return (
    <div className='home'>
        <FeaturedInfo />
         <Chart title="User Analytics" data={userData} grid dataKey="Active User" />
         <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
         </div>
    </div>
  )
}

export default Home