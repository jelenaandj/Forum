import React, { useState,useEffect } from 'react'

export default function Profile({match}) {

    const [userID] = useState(match.params.user_id)
    const [user, setUser] = useState({})

    // useEffect(() =>{
    //     getUsername(userID)
    //     .then(data => setUser(data.user))
    // },[userID])
    

    return (
        <div>
            <p>name</p>
            <p>surname</p>
            <p>username</p>
            <p>email</p>

        </div>
    )
}
