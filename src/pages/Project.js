import React from 'react'
import Card from '../components/Card'
import Music from '../images/music.png'
import Game from '../images/game.png'
import Food from '../images/food.png'
import Crypto from '../images/crypto.png'
import Gym from '../images/gym.png'
import Movie from '../images/Movie.png'
import Todolist from '../images/todolist.png'
import Shopping from '../images/shopping.png'
import './project.css'

const Project = () => {
  const card = [
    {
      id: 1,
      title: 'Movie Lovers',
      img: Movie,
      description: 'A MERN app that allows everyone to share, modify, like and delete a movie post',
      skills:'React, Redux, Express, Node, MongoDB, Material UI',
      github: 'https://github.com/HannanAzari/movie-lovers',
      demo: 'https://movie-lovers-frontend.onrender.com/'
    },
    {
      id: 2,
      title: 'Shopping Cart',
      img: Shopping,
      description: 'Shopping website with ability to add and delete products to the cart',
      skills:'React, Typescript, Bootstrap',
      github: 'https://github.com/HannanAzari/shopping-cart',
      demo: 'https://hannanazari.github.io/shopping-cart/'
      
    },
    {
      id: 3,
      title: 'Food Recipe',
      img: Food,
      description: 'Look for an ingredient to see the food recipes',
      skills:'React, CSS',
      github: 'https://github.com/HannanAzari/food-recipe',
      demo: 'https://hannanazari.github.io/food-recipe/'
    },
    {
      id: 4,
      title: 'Fire Game',
      img: Game,
      description: 'Search for a video game, and see the popular,upcoming and new games',
      skills:'React, Redux, Styled Component',
      github: 'https://github.com/HannanAzari/fire-games',
      demo: 'https://hannanazari.github.io/fire-games/'
    },
    {
      id: 5,
      title: 'Gym Exercises',
      img: Gym,
      description: 'Browse exercises related to the specific muscles and see the GIF workout',
      skills:'React, Material UI',
      github: 'https://github.com/HannanAzari/gym-exercises',
      demo: 'https://hannanazari.github.io/gym-exercises/'
    },
    {
      id: 6,
      title: 'To Do List',
      img: Todolist,
      description: 'Make a list, tick when completed and remove as you wish',
      skills:'React, CSS',
      github: 'https://github.com/HannanAzari/todolist',
      demo: 'https://hannanazari.github.io/todolist/'
    },
    {
      id: 7,
      title: 'Crypto Website',
      img: Crypto,
      description: 'Search for a crypto coin, and see the top 100 coins',
      skills:'React, CSS',
      github: 'https://github.com/HannanAzari/crypto',
      demo: 'https://hannanazari.github.io/crypto/'
    },
    {
      id: 8,
      title: 'Music Player',
      img: Music,
      description: 'Listen to the list of music and switch between the songs',
      skills:'React, CSS',
      github: 'https://github.com/HannanAzari/music-player',
      demo: 'https://hannanazari.github.io/music-player/'
      
    }
    
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