import React from 'react'
import Navbar from '../navbar/Navbar.container'

export default function ProfilePage({user}) {
    return (
        <div>
            <Navbar />
            <h2>Profile Page</h2>
            <p>Welcome {user.alias}!</p>
        </div>
    )
}
