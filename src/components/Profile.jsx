import React, { useState,useEffect } from 'react'
import { getAllUsers } from '../service'

export default function Profile({match}) {

    const [user, setUser] = useState([])
    let username = match.params.username;


    useEffect(()=>{
        getAllUsers().then(data=>{
           let dataUser=data.users.find(x=>{
               return username===x.username
            })
           setUser(dataUser)
           console.log(user)
        })
    },[])
    // useEffect(() =>{
    //     getUsername(userID)
    //     .then(data => setUser(data.user))
    // },[userID])
    

    return (
        <div>
            <p>{user.username}</p>
            <p>surname</p>
            <p>username</p>
            <p>email</p>

        </div>
    )
}
