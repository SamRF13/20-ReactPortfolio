import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import GitLogo from '../pages/images/GithubLogo.png'

const Project = ({title, deployLink, githubRepo, img} ) => {
    return (
    <div>
<h1>{title}</h1>

<a target="_blank" href={deployLink}><img src={img} alt="img" className='deployImg'/></a>
<a target="_blank" href={githubRepo}><img src={GitLogo} alt="GitLogo" className='gitLogo'/></a>
    </div>
  
  
    )
  }

  export default Project;