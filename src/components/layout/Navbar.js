import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar bg-primary">
                <h1>
                {props.title}
                </h1>
                <ul >
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                </ul>
            </nav> 
        </div>
    )
}
Navbar.defaultProps  =  {
    title: ' Marvel Characters',
}
Navbar.propTypes =  {
    title: PropTypes.string.isRequired,
}

export default Navbar
