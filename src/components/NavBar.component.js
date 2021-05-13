import React from 'react'
import { Link } from 'react-router-dom'

const navbarStyles = {
    backgroundColor: '#8bc34a',
    padding: '20px 300px 20px 300px'
}

const headerStyles = {
    color: 'white',
    display: 'flex'
}

const logoStyles = {
    flexBasis: '5%'
}

const searchbarStyles = {
    flexBasis: '70%',
    paddingLeft: 15
}

const linksStyles = {
    flexBasis: '25%'
}

export default function NavBar() {
    return (
        <nav style={{...navbarStyles}}>
            <div className="header" style={{...headerStyles}}>
                <div className="logo-container" style={{...logoStyles}}><h3>TheYardApp</h3></div>
                <div className="searchbar-container" style={{...searchbarStyles}}><h4>Search Bar</h4></div>
                <div className="links-container" style={{...linksStyles}}>
                    <ul><li><Link to="/login">Login</Link></li></ul>
                </div>
             </div>
            <div className="subheader">Row 2!!</div>
        </nav>
    )
}
