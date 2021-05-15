import React from 'react'
import NavbarAuthenticated from './NavbarAuthenticated.component';
import NavbarUnauthenticated from './NavbarUnauthenticated.component';
// Redux
import { useSelector } from "react-redux";

export default function NavbarContainer() {
    const user = useSelector(state => state.user)

    return (
      <>
        {user.authenticated && user.user 
        ?  <NavbarAuthenticated user={user.user} />
        :  <NavbarUnauthenticated />
        }
      </>
    )
  
}
