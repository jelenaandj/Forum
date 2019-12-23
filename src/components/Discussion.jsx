import React from 'react'
import MessageList from './MessageList'

export default function Discussion({title,timestamp,history}) {
    let timeStampFormat=new Date(timestamp).toLocaleString()
    //sve por za tu diskusiju
    return (
        <div>
            <p >{title} {timeStampFormat}</p>

            
            {/* <form>
                <input type='text' placeholder='New Message' />
                <input type="submit" value="Send" />
            </form> */}
        </div>
    )
}
// key={disc.topics_id} title={disc.title} timestamp={disc.timestamp}history={history}/>