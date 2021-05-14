import React from 'react'
import { Link } from 'react-router-dom'
// Redux
import { useDispatch ,useSelector } from "react-redux";
import allActions from '../redux/actions/index';

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
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();

    const _handleSignout = () => {
        dispatch(allActions.userActions.signoutUser())
    }
    return (
        <nav style={{...navbarStyles}}>
            <div className="header" style={{...headerStyles}}>
                <div className="logo-container" style={{...logoStyles}}><h3>TheYardApp</h3></div>
                <div className="searchbar-container" style={{...searchbarStyles}}><h4>Search Bar</h4></div>
                <div className="links-container" style={{...linksStyles}}>
                    {user.authenticated ? 
                        <ul><li><Link onClick={_handleSignout}>SignOut</Link></li></ul> 
                        : 
                        <ul><li><Link to="/signin">SignIn</Link></li></ul>}
                </div>
             </div>
            <div className="subheader">Row 2!!</div>
        </nav>
    )
}
