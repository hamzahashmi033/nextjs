import React from 'react'
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <ul>
            <li>Home</li>
            <li>Blogs</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
    </nav>
  )
}

export default Navbar
