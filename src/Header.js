import React from 'react'
import "./Header.css"
import HeaderOption from './HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CommentIcon from '@mui/icons-material/Comment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';

function Header() {
  const dispatch = useDispatch()

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }

  return (
    <div className='header'>
      <div className="header_left">
            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />

            <div className="header_search">
              <SearchIcon />
              <input placeholder='Search' type="text" />
            </div>
      </div>
      
      <div className="header_right">
              <HeaderOption Icon={HomeIcon} title="Home" />
              <HeaderOption Icon={PeopleIcon} title="My Network" />
              <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
              <HeaderOption Icon={CommentIcon} title="Messaging" />
              <HeaderOption Icon={NotificationsIcon} title="Notifications" />
              <HeaderOption avatar={true}
              title="Me" onClick={logoutOfApp}
              />
      </div>
    </div>
  );
}

export default Header