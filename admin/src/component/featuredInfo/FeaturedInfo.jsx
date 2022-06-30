import React from 'react'
import './featureInfo.css'
import {ArrowDownward, ArrowUpward} from '@mui/icons-material'
function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featureItem">
            <div className="featureTitle">Revenue</div>
            <div className="featureMoneyContainer">
                <span className="featureMoney">$2,415.75</span>
                <span className="featureMoneyRate">-11.4 <ArrowDownward className='featuredIcon negative' /> </span>
            </div>
            <span className="featureSub">Compare to last month</span>
        </div>

        <div className="featureItem">
            <div className="featureTitle">Sales</div>
            <div className="featureMoneyContainer">
                <span className="featureMoney">$4,415.15</span>
                <span className="featureMoneyRate">-1.4 <ArrowDownward className='featuredIcon negative' /> </span>
            </div>
            <span className="featureSub">Compare to last month</span>
        </div>

        <div className="featureItem">
            <div className="featureTitle">Cost</div>
            <div className="featureMoneyContainer">
                <span className="featureMoney">$2,225.75</span>
                <span className="featureMoneyRate">+2.4 <ArrowUpward className='featuredIcon' /> </span>
            </div>
            <span className="featureSub">Compare to last month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo