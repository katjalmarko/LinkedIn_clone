import React from 'react'
import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import InputOption from './InputOption';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import EventNoteIcon from '@mui/icons-material/EventNote';
import NewspaperIcon from '@mui/icons-material/Newspaper';

function Feed() {
  return (
    <div className='feed'>
        <div className="feed_inputContainer">
          <div className="feed_input">
            <CreateIcon />
            <form>
              <input type="text" />
              <button type='submit'>Send</button>
            </form>
          </div>

          <div className="feed_inputOptions">
            <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
            <InputOption Icon={SmartDisplayIcon} title="Video" color="#008000" />
            <InputOption Icon={EventNoteIcon} title="Event" color="#b5651d" />
            <InputOption Icon={NewspaperIcon} title="Write article" color="#CC5500" />
          </div>
        </div>
      </div>
  )
}

export default Feed