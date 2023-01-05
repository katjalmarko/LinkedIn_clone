import React from 'react';
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className='widgets'>
     <div className="widgets_header">
      <h2>LinkedIn News</h2>
      <InfoIcon />

     </div>
     {newsArticle("Marko Katjal is coding", "Top news - 1327 readers")}
     {newsArticle("Can WEB3 change the world?", "Code - 7601 readers")}
     {newsArticle("neveResting has reached 120 clients", "Fitness - 4115 readers")}
     {newsArticle("China to open border with Hong Kong", "Top news - 2213 readers")}
     {newsArticle("First bitcoin is 14 years old!", "Crypto - 9517 readers")}
     {newsArticle("Korean hacker has stolen 6.7M $", "Code - 14512 readers")}
    </div>
  )
}

export default Widgets