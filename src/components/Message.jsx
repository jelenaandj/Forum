import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../service'

export default function Message({message,history}) {

    let timeStampMsg=new Date(message.timestamp).toLocaleString()
    const[user,setUser]=useState([])
    
    let username=message.username

    useEffect(()=>{
        getAllUsers().then(data=>{
           
           setUser(data.users)
           console.log(user)
        })
    },[])

    return (
        <div>
            <p onClick={() => {history.push(`/profile/${user.id}`)
        }} >{message.username} {message.message} {timeStampMsg}</p>
        </div>
    )
}
