import React from 'react'
import Card from '../components/Card'
import Tic from '../images/tic-tac-toe.png'
import Todolist from '../images/todolist.png'
import Gighy from '../images/giphy-gallery.png'
import Servo from '../images/servo.png'
import Travel from '../images/travel-experience.png'
import './project.css'

const Project = () => {
  const card = [
    {
      id: 1,
      title: 'Tic Tac Toe',
      img: Tic,
      description: 'A Tic Tac Toe game with features such as turn switching, visually displaying the winner, and displaying a draw message when no winner is found. After each round, players can reset the game and a few seconds of autoplay are included.To keep track of scores, a scoreboard records each players score.',
      skills:'HTML, JavaScript, CSS, DOM manipulation',
      github: 'https://github.com/elmira1788/Tic-Tac-Toe',
      demo: 'https://elmira1788.github.io/Tic-Tac-Toe/'
    },
    {
      id: 2,
      title: 'Gif Finder',
      img: Gighy,
      description: 'A single-page application that fetches interesting GIFs from Giphy public API using AJAX to retrieve data from the server and react-router-dom to link to different pages of the application.',
      skills:'React, Javascript, AJAX, Html, CSS',
      github: 'https://github.com/elmira1788/gif-finder',
      demo: 'https://elmira1788.github.io/gif-finder/'
      
    },
    {
      id: 3,
      title: 'Servo App',
      img: Servo,
      description: 'A single-page application that uses a custom-built REST JSON API to fetch data about petrol stations within specific boundaries and present them on a Google Maps API. The app calculates distances using a PostgreSQL query string and sorts them using an algorithm. Users can search for various service stations on the map using location data stored in a database.',
      skills:'JavaScript, Axios, Node.js, PostgreSQL, EJS, Htnl, CSS',
      github: 'https://github.com/elmira1788/servo_api',
      demo: '#'
    },{
      id: 4,
      title: 'Travel Experience',
      img: Travel,
      description: 'A password-protected memory app that allows users to log in and share their experiences with others. The app is a full-stack CRUD (Create, Read, Update, Delete) application that uses PostgreSQL to store the database and EJS (Embedded JavaScript) to create dynamic HTML templates.s',
      skills:'JavaScript, PostgreSQL, HTML, CSS',
      github: 'https://github.com/elmira1788/travelexperience',
      demo: 'https://travelexperience.onrender.com/'
    },
    
    
    
  ]
  return (
    <div name='project' className='project'>
      <h1>Projects</h1>
      <div className='card-list'>
        {card.map(res => (
          <Card 
            key={res.id}
            title={res.title}
            img={res.img}
            github={res.github}
            demo={res.demo}
            description={res.description}
            skills={res.skills}
          />
          ))}
      </div>
    </div>
  )
}

export default Project