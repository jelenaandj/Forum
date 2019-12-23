import React from 'react'
import LogIn from '../components/LogIn'
import Register from '../components/Register'
import { Link,withRouter } from 'react-router-dom'


export default function Header({setUser,user,logedIn,history}) {

    return (
        <div>
            <Link to='/register'><button className='header-btn'>Registration</button></Link>

            <Link to='/login'><button className='header-btn'>Log in</button></Link>
            <Link to='/'><button className='header-btn' id="logout-btn" onClick={() => setUser()}>Log out</button></Link>

        </div>
    )
}
    
