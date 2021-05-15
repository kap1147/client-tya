import React from 'react'
import Navbar from '../navbar/Navbar.container'
// Redux
import { useSelector } from "react-redux";

export default function ProfilePage() {
    const {user} = useSelector((state) => state.user);

    return (
        <div>
            <Navbar />
            <h2>Profile Page</h2>
            {console.log(user)}
        </div>
    )
}
