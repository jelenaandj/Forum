import React, { useState,useEffect } from 'react'
import { getAllUsers } from '../service'
// import styles from '../css/Profile.module.css';

export default function Profile({match}) {

    const [user, setUser] = useState()
    let username = match.params.username;


    useEffect(()=>{
        getAllUsers().then(data=>{
           let dataUser=data.users.find(x=>{
               return username===x.username
            })
            
            setUser(dataUser)
        //    console.log(user)
        })
    },[])
    // useEffect(() =>{
    //     getUsername(userID)
    //     .then(data => setUser(data.user))
    // },[userID])
    let tempUserpic="https://image.flaticon.com/icons/png/512/17/17004.png";

    return (
        user?
    <div className='user'>
            <p><label>Name:</label> <label className='userLabel'>{user.name}</label></p>
            <p><label>Surname:</label> <label className='userLabel'>{user.surname}</label></p>
            <p><label>Username:</label> <label className='userLabel'>{user.username}</label></p>
            <p><label>Email:</label> <label className='userLabel'>{user.email}</label></p>
            <img className='profilePic' src={user.picture===null? tempUserpic:user.picture} alt='user-img'/>
        </div>:
        <div>
            {/* {alert("User doesn't exist")} */}
            {null}
        </div>
    )
}
