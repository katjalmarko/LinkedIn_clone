import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar_top">
        <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.1.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" alt="" />
        <Avatar className='sidebar_avatar'/>
        <h2>Marko Katjal</h2>
        <h4>katjalmarko@gmail.com</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">
            2,543
          </p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">
            2,448
          </p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>

      </div>
    </div>
  )
}

export default Sidebar