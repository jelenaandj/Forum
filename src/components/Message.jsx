import React from 'react'

export default function Message({message,history}) {
//prima objekat message koji ima username,message,timestamp
    let timeStampMsg=new Date(message.timestamp).toLocaleString();

    return (
        <div className='msg'>
            <p onClick={() => history.push(`/profile/${message.username}`)}> {message.username} {message.message.toString()} {timeStampMsg}</p>
            
        </div>
    )
}
