import React, {} from 'react'

export default function Message({message,history}) {

    let timeStampMsg=new Date(message.timestamp).toLocaleString();

    return (
        <div>
            <p onClick={() => history.push(`/profile/${message.username}`)}> {message.username} {message.message} {timeStampMsg}</p>
        </div>
    )
}
