import React, {useContext} from 'react'
import {UserContext} from '../App'
import { Link,withRouter } from 'react-router-dom'


export default function Header({setUser,user,history}) {

    const loggedIn=useContext(UserContext)
    console.log(loggedIn)

    if(loggedIn){
    return (
        <header>
        {/* <h1 onClick={() => history.push(`/`)} >FORUM</h1> */}
        <div>
            <Link to='/'><h1 >FORUM</h1></Link>
            <Link to={`/profile/${user.username}`} className='header-profile'>{user.username}</Link>
            <Link to='/'><button className='header-btn' id="logout-btn" onClick={() => setUser()}>Log out</button></Link>
        </div>
        </header>
       
    )}else{
        return(
        <header>
        <div>
            <Link to='/'><h1 >FORUM</h1></Link>
            <Link to='/register'><button className='header-btn'>Registration</button></Link>
            <Link to='/login'><button className='header-btn'>Log in</button></Link>
        </div>
        </header>
        )    
    }
}
    
