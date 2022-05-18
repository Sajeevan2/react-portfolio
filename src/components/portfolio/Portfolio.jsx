import React from 'react'
import './portfolio.css'

const data =[
  {
    id:1,
    image:'',
    title:'Title',
    github:'https://github.com',
    demo:''
  },
  {
    id:2,
    image:'',
    title:'Title2',
    github:'https://github.com',
    demo:''
  },
  {
    id:3,
    image:'',
    title:'Title3',
    github:'https://github.com',
    demo:''
  },
  {
    id:4,
    image:'',
    title:'Title4',
    github:'https://github.com',
    demo:''
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({id,image,title,github,demo})=>{
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target="_blank">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio