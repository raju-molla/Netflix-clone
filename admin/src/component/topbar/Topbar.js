import React from 'react'
import './topbar.css'
import {NotificationsNone,Language,Settings} from '@mui/icons-material';
function Topbar() {
  return (
    <div className='topbar'>
        <div className='WrapTopbar'>
            <div className='leffTop'>
                <span className='logo'>MollaAdmin</span>
            </div>
            <div className='rightTop'>
                <div className='topbarIcons'>
                    <NotificationsNone />
                    <span className='topbadge'>2</span>
                </div>
                <div className='topbarIcons'>
                    <Language />
                    <span className='topbadge'>2</span>
                </div>
                <div className='topbarIcons'>
                    <Settings />
                </div>
                <img src='https://pbs.twimg.com/media/DwHXvUbVsAA7CF_.jpg' alt='' className='topbarImage' />
            </div>
        </div>
    </div>
  )
}

export default Topbar