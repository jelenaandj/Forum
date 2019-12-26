import React, {useContext} from 'react'
import {UserContext} from '../App'
import { Link } from 'react-router-dom'


export default function Header({setUser,user,history}) {

    const loggedIn=useContext(UserContext)
    console.log(loggedIn)
    let tempUserpic="https://image.flaticon.com/icons/png/512/17/17004.png";


    if(loggedIn){
    return (
        <header>
        {/* <h1 onClick={() => history.push(`/`)} >FORUM</h1> */}
        <div className='loggedInDiv'>
            <Link to='/'><h1 >FORUM</h1></Link>
            <Link to={`/profile/${user.username}`} className='header-profile'><div className='hederpic' ><img className='profilePic' src={user.picture===null? tempUserpic:user.picture} style={{height: "30px",width:'auto'}} alt='user-img'/>{user.username}</div></Link>
            <Link to='/'><button className='header-btn' id="logout-btn" onClick={() => setUser()}>Log out</button></Link>
        </div>
        </header>
       
    )}else{
        return(
        <header>
        <div className='loggedOutDiv'>
            <Link to='/'><h1 >FORUM</h1></Link>
            <Link to='/register'><button className='header-btn'>Registration</button></Link>
            <Link to='/login'><button className='header-btn'>Log in</button></Link>
        </div>
        </header>
        )    
    }
}
    
