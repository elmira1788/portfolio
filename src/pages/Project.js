import React from 'react'
import Card from '../components/Card'
import Music from '../images/music.png'
import Game from '../images/game.png'
import Food from '../images/food.png'
import Crypto from '../images/crypto.png'
import Gym from '../images/gym.png'
import Todolist from '../images/todolist.png'
import './project.css'

const Project = () => {
  const card = [
    {
      id: 1,
      title: 'Crypto Website',
      img: Crypto,
      github: 'https://github.com/HannanAzari/crypto'
    },
    {
      id: 2,
      title: 'Music Player',
      img: Music,
      github: 'https://github.com/HannanAzari/music-player'
      
    },
    {
      id: 3,
      title: 'Food Recipe',
      img: Food,
      github: 'https://github.com/HannanAzari/food-recipe'
    },
    {
      id: 4,
      title: 'Fire Game',
      img: Game,
      github: 'https://github.com/HannanAzari/fire-game'
    },
    {
      id: 5,
      title: 'Gym Exercises',
      img: Gym,
      github: 'https://github.com/HannanAzari/gym-exercises'
    },
    {
      id: 6,
      title: 'To Do List',
      img: Todolist,
      github: 'https://github.com/HannanAzari/todolist'
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
          />
          ))}
      </div>
    </div>
  )
}

export default Project