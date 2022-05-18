 import React from 'react'
 import './about.css'
 import ME from '../../assets/prof.jpg'
 import {FaAward,FaUsers,FaFolder} from 'react-icons/fa'
 
 const About = () => {
   return (
     <section id="about">
       <h5>Get To Know</h5>
       <h2>About Me</h2>
       <div className="container about_container">
          <div className="about_me">
            <div className="about_me-image">
              <img src={ME} alt="About Img" />
            </div>
          </div>
          <div className="about_content">
              <div className="about_cards">
                <article className="about_card">
                  <FaAward className="about_icon"/>
                  <h5>Experience</h5>
                  <small>2+ Years Working</small>
                </article>

                {/* <article className="about_card">
                  <FaUsers className="about_icon"/>
                  <h5>Clients</h5>
                  <small>200+ Worldwide</small>
                </article>

                <article className="about_card">
                  <FaFolder className="about_icon"/>
                  <h5>Projects</h5>
                  <small>80+ Completed projects</small>
                </article> */}
              </div>

              <p>
              I’ve always been a great problem solver, an independent introvert, and a technophile obsessed with the latest devices. 
              Today, I’m working as a software engineer for Revonetics pvt Ltd., and I get to show off all these elements of who I am.
              I started learning to code when I was in my university. when working on differnt internal projects, I realized software engineering was the right field for me.
              Since then, I’ve worked on devloping myself towards my career goal. 
              Today, I’m working as a developer with the amazing team at Revonetics pvt Ltd., and am getting into machine learning on my own time.
              I’m familiar with a variety of programming languages, including JavaScript, HTML, CSS, jQuery, PHP and ReactJS, 
              but I’m always adding new skills to my repertoire. I’m also eager to meet other software engineers in the area, so feel free to connect!
              </p>
              <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </div>
       </div>
     </section>
   )
 }
 
 export default About