import React, { useEffect, useState,useContext } from 'react'
import Discussion from './Discussion'
import { getAllDisc, addNewDisc, addNewMsg } from '../service'
import {UserContext} from '../App'


export default function DiscussionsList({history}) {

const user=useContext(UserContext)

const[allDisc,setAllDisc]=useState([])
const[newDisc,setNewDisc]=useState({})
const[newTitle,setNewTitle]=useState('')
const[newTitleMsg,setNewTitleMsg]=useState('')


   //sve teme sa apija setujem disc
//user_id,title
    useEffect(()=>{
        getAllDisc().then(data=>{
           setAllDisc(data.topics) 
                // console.log(data.topics)  
        })
    },[newDisc])
 
//nova tema nadjem sa mmojim user_id iz contexta,title



    function handleNewDisc(user_id,title){
        addNewDisc({user_id,title}).then(data=>{
                setNewDisc(data.topic);
                if(newTitleMsg!==''){
                    addNewMsg({username:user.username,topic_id:data.topic.topic_id,message:newTitleMsg}).then(data=>{
                        setNewTitleMsg(data,newTitleMsg)
                        console.log(data.message)
                    })
                }
                console.log(data)

        })
    }
    //ubacila temu u api 

    console.log(newDisc)
    return (
        <div>
        <div className='scroll'>
            {allDisc.map((disc)=>{
            return <Discussion key={disc.topic_id} topic_id={disc.topic_id} title={disc.title.toString()} timestamp={disc.timestamp}history={history}/>
            })}
        </div>
            {user?
            <form>
                <input type="text" placeholder="Discussion Name" required onInput={e => {
                setNewTitle(e.target.value)
            }}/>
                <input type='text' placeholder='New Message' onChange={e=>{setNewTitleMsg(e.target.value)}} />
                <input type="submit" value="Send" className='btn'  onClick={e => {
                    e.preventDefault();
                    handleNewDisc(user.user_id,newTitle)
                    }} />
            </form>
                :null}
        
        </div>
    );
}
