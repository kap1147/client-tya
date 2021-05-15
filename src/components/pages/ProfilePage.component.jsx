import React from 'react'
import userActions from '../../redux/actions/userActions'

export default function ProfilePage({user}) {
    return (
        <div>
            <h2>Profile Page</h2>
            <p>Welcome {user.alias}!</p>
        </div>
    )
}
