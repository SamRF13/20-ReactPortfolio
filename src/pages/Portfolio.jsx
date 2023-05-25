import React from 'react'
import Project from '../components/Project'

import NoteCreator from './images/NoteTakerImg.png'
import PasswordGeneratorImage from '../pages/images/PasswordGenerator.png'
import DynamicQuizImage from '../pages/images/DynamicQuiz.png'
import NoteTakerImage from '../pages/images/NoteTaker.png'
import BlogEditorImage from '../pages/images/BlogEditor.png'
import PWAImage from '../pages/images/PWA.png'

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
img = {"/assets/images/Calendar2Logo.png"}
/> 

<Project
title = {"Calendar App"}
deployLink = {"https://samrf13.github.io/05-Calendar/"}
githubRepo  = {"https://github.com/SamRF13/05-Calendar"}
img = {"/assets/images/CalendarLogo.png"}
/> 

    </div>
  )}

export default Portfolio