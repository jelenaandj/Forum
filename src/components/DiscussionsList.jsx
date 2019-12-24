import React, { useEffect, useState,useContext } from 'react'
import Discussion from './Discussion'
import { getAllDisc, addNewDisc } from '../service'
import {UserContext} from '../App'


export default function DiscussionsList({history}) {

const[allDisc,setAllDisc]=useState([])
const[newDisc,setNewDisc]=useState({})
const[newTitle,setNewTitle]=useState('')
const user=useContext(UserContext)


    useEffect(()=>{
        getAllDisc().then(data=>{
           setAllDisc(data.topics) 
                // console.log(data.topics)  
        })
    },[newDisc])
    // console.log(allDisc[0])
//user_id,title
    function handleNewDisc(user_id,title){
        addNewDisc({user_id,title}).then(data=>{
                setNewDisc(data.topic)
                console.log(data)

        })
    }
    console.log(newDisc)
    return (
        <div>
            {allDisc.map((disc)=>{
            return <Discussion key={disc.topic_id} topic_id={disc.topic_id} title={disc.title} timestamp={disc.timestamp}history={history}/>
            })}

            <form>
                <input type="text" placeholder="Discussion Name" required onInput={e => {
                setNewTitle(e.target.value)
            }}/>
                <input type='text' placeholder='New Message' />
                <input type="submit" value="Send"  onClick={e => {
                    e.preventDefault();
                    handleNewDisc(user.user_id,newTitle)
                    }} />
            </form>
        </div>
    );
}
// useEffect(()=>{
//     getAllDisc().then(data=>{
//         if(data.success) {
//             setAllDisc(data.topics)   
//         }
//         else console.log('error')
//     })
// },[])