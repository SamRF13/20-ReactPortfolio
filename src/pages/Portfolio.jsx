import React from 'react'
import Project from '../components/Project'

const Portfolio = () => {
  return (
    <div className='one'>
<Project
title = {"Note Taker"}
deployLink = {"https://calendar-11.herokuapp.com/"}
githubRepo  = {"https://github.com/SamRF13/11-Note-Creator"}
img = {"/imagesAssets/NoteTakerImg.png"}
/> 

<Project
title = {"Weather App"}
deployLink = {"https://samrf13.github.io/06-Weather-app/"}
githubRepo  = {"https://github.com/SamRF13/06-Weather-app/"}
img = {"/imagesAssets/Calendar2Logo.png"}
/> 

<Project
title = {"Calendar App"}
deployLink = {"https://samrf13.github.io/05-Calendar/"}
githubRepo  = {"https://github.com/SamRF13/05-Calendar"}
img = {"/imagesAssets/CalendarLogo.png"}
/> 

    </div>
  )
}

export default Portfolio