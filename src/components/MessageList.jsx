import React, { useEffect, useState,useContext } from 'react';
import Message from './Message'
import { getDiscMsg } from '../service';
import {UserContext} from '../App'


export default function MessageList({match, history}) {

    // const [topicID,setTopicID] = useState(match.params.topics_id)
    const user=useContext(UserContext)

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
            {messages.map(message=>{ return (
            <div><Message message={message} key={message.id} history={history}/></div>
                )})}
            {user?
               <form>
                    <input type='text' placeholder='New Message' />
                    <input type="submit" value="Send" />
                </form>
            :null} 
        </div>
    )
}
