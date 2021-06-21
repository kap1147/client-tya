import React from 'react'
import NavbarAuthenticated from './NavbarAuthenticated.component';
import NavbarUnauthenticated from './NavbarUnauthenticated.component';
// Redux
import { useSelector } from "react-redux";

export default function NavbarContainer() {
    const auth = useSelector(state => state.auth)

    return (
      <>	
        {auth.authenticated 
        ?  <NavbarAuthenticated token={auth.refreshToken} />
        :  <NavbarUnauthenticated />
        }
      </>
    )
  
}
