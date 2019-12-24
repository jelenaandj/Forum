import React from 'react'
// import MessageList from './MessageList'

export default function Discussion({topic_id,title,timestamp,history}) {
    let timeStampFormat=new Date(timestamp).toLocaleString()
    // console.log(topic_id)
    //sve por za tu diskusiju
    return (
        <div>
            <p onClick={() => {history.push(`/MessageList/${topic_id}`)
        }} >{title} {timeStampFormat}</p>
            
            {/* <form>
                <input type='text' placeholder='New Message' />
                <input type="submit" value="Send" />
            </form> */}
        </div>
    )
}
// key={disc.topics_id} title={disc.title} timestamp={disc.timestamp}history={history}/>