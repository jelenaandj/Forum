import React, { useEffect, useState } from 'react'
import Discussion from './Discussion'
import { getAllDisc } from '../service'

export default function DiscussionsList({history}) {

const[allDisc,setAllDisc]=useState([])

    useEffect(()=>{
        getAllDisc().then(data=>{
           
                setAllDisc(data.topics) 
                // console.log(data.topics)  
           
        })
    },[])
    console.log(allDisc[0])
    return (
        <div>
            {/* {allDisc.forEach(obj=>{
                obj.map(disc=>{
                    console.log(disc)
                })
            })} */}
       
            {allDisc.map((disc)=>{
            return <Discussion key={disc.topic_id} topic_id={disc.topic_id} title={disc.title} timestamp={disc.timestamp}history={history}/>
            })}
 
            <form>
                <input type='text' placeholder='Discussion Name' />
                <input type='text' placeholder='New Message' />
                <input type="submit" value="Send" />
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