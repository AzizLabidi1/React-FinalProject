import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src="https://previews.123rf.com/images/sabelskaya/sabelskaya1608/sabelskaya160800212/61939909-colorful-abstract-cocktail-logo-vector-illustration-isolated-on-white-background-modern-alcoholic-be.jpg" alt='cocktail db logo' className='logo' />
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}