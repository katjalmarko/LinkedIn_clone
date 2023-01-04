import { Avatar } from '@mui/material'
import React from 'react'
import InputOption from './InputOption'
import "./Post.css"
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

function Post({ name, description, message, photoUrl }) {
  return (
    <div className='post'>
      <div className='post_header'>
      <Avatar />
      <div className="post_info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      </div>

      <div className="post_body">
        <p>{message}</p>
      </div>

      <div className="post_buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={CommentRoundedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareRoundedIcon} title="Share" color="gray" />
        <InputOption Icon={SendRoundedIcon} title="Send" color="gray" />
      </div>
    </div>
  )
}

export default Post