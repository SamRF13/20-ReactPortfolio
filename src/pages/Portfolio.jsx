import React from 'react'
import Project from '../components/Project'

import NoteCreator from './images/NoteTakerImg.png'
import WeatherApp from './images/Calendar2Logo.png'
import CalendarApp from '/images/CalendarLogo.png'


const Portfolio = () => {
  return (
    <div className='one'>
<Project
title = {"Note Taker"}
deployLink = {"https://calendar-11.herokuapp.com/"}
githubRepo  = {"https://github.com/SamRF13/11-Note-Creator"}
img = {NoteCreator}
/> 

<Project
title = {"Weather App"}
deployLink = {"https://samrf13.github.io/06-Weather-app/"}
githubRepo  = {"https://github.com/SamRF13/06-Weather-app/"}
img = {WeatherApp}
/> 

<Project
title = {"Calendar App"}
deployLink = {"https://samrf13.github.io/05-Calendar/"}
githubRepo  = {"https://github.com/SamRF13/05-Calendar"}
img = {CalendarApp}
/> 

    </div>
  )}

export default Portfolio