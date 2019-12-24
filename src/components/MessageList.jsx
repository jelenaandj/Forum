import React, { useEffect, useState,useContext } from 'react';
import Message from './Message'
import { getDiscMsg, addNewMsg } from '../service';
import {UserContext} from '../App'


export default function MessageList({match, history}) {

    // const [topicID,setTopicID] = useState(match.params.topics_id)
    const user=useContext(UserContext)

    const [messages, setMessages] = useState([])
    const[newMsg,setNewMsg]=useState({})
    let topicID = match.params.topic_id;

    // console.log(topicID)
console.log(newMsg)
    useEffect(() =>{
        getDiscMsg(topicID)
        .then(data => {
            setMessages(data.messages)
        })    
    },[topicID,newMsg])
    // console.log(messages)
    
    function handleSubmit(username,topic_id,message){
        addNewMsg({username,topic_id,message}).then(data=>{
            setNewMsg(data)
            console.log(data.message)
        })
    }

    return (
        <div>
            {messages.map(message=>{ return (
            <div><Message message={message} key={message.id} history={history}/></div>
                )})}
            {user?
               <form>
                    <input type='text' placeholder='New Message'required onInput={e => {setNewMsg(e.target.value)}}/>
                    <input type="submit" value="Send" onClick={e => {e.preventDefault();handleSubmit(user.username,topicID,newMsg)}} />
                </form>
            :null} 
        </div>
    )
}
