import './header.css'
import React from 'react'
import Dropdown from '../Dropdown/Dropdown'

function Header () {
    return (
    <div className='header'>
        <div className='logo'>Awesome Kanban Board</div>
        
        <Dropdown />
    </div>
)}
export default Header;  