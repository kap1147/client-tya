import React from 'react'
import NavbarAuthenticated from './NavbarAuthenticated.component';
import NavbarUnauthenticated from '../Navbar.component';
// Redux
import { useSelector } from "react-redux";

export default function NavbarContainer() {
    const auth = useSelector(state => state.auth);
    const {socket} = useSelector(state => state.socket);

    return (
      <>	
        {auth.authenticated && socket
        ?  <NavbarAuthenticated socket={socket} />
        :  <NavbarUnauthenticated />
        }
      </>
    )
  
}
