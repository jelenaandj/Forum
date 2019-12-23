import React, { useEffect, useState } from 'react';
import Message from './Message'
import { getDiscMsg } from '../service';

export default function MessageList({match}) {

    // const [topicID,setTopicID] = useState(match.params.topics_id)
    const [messages, setMessages] = useState([])
    let topicID = match.params.topic_id;

    console.log(topicID)

    useEffect(() =>{
        getDiscMsg(topicID)
        .then(data => {
            setMessages(data.messages)
        })
        
    },[topicID])
    console.log(messages)
    return (
        <div>
            {messages.map(message=>{
                return  <Message message={message}/>
            })}
            {/* <form>
                <input type='text' placeholder='Discussion Name' />
                <input type='text' placeholder='New Message' />
                <input type="submit" value="Send" />
            </form> */}
        </div>
    )
}
