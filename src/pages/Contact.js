import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div name='contact' className='form-container'>
            <p className='contact'>Contact</p>
            <p className='email'>To contact me please submit the form below</p>
        <form action="https://getform.io/f/6092a8a4-b9fa-4335-b83a-36e5ac992ab7" method="POST" className='form'>
            <input name='name' className='name-input' type='text' placeholder='Name'></input>
            <input name='email' className='email-input' type='email' placeholder='Email'></input>
            <textarea name='text' className='text-input' type='text' placeholder='Message'></textarea>
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Contact