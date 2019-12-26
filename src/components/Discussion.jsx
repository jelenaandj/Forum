import React from 'react'
// import MessageList from './MessageList'

export default function Discussion({topic_id,title,timestamp,history}) {
    let timeStampFormat=new Date(timestamp).toLocaleString()
    // console.log(topic_id)
    //sve por za tu diskusiju 
    // console.log(history) je objekat sa path 
    return (
        <div className='discussion' >
            <p  onClick={() => {history.push(`/MessageList/${topic_id}`)
        }} >{title} {timeStampFormat}</p>
        </div>
    )
}
//messageList/topic_id ruta u contextu, 