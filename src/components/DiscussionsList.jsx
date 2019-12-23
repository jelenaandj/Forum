import React, { useEffect, useState } from 'react'
import Discussion from './Discussion'
import { getAllDisc } from '../service'

export default function DiscussionsList({history}) {

const[allDisc,setAllDisc]=useState('')

    useEffect(()=>{
        getAllDisc().then(data=>{
           
                setAllDisc(data.topics)   
           
        })
    },[])
    
    return (
        <div>
            {/* {allDisc.map(disc=>{
                return <Discussion key={disc.topics_id} disc={disc}history={history}/>
            })} */}
            <form>
                <input type='text' placeholder='Discussion Name' />
                <input type='text' placeholder='New Message' />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}
// useEffect(()=>{
//     getAllDisc().then(data=>{
//         if(data.success) {
//             setAllDisc(data.topics)   
//         }
//         else console.log('error')
//     })
// },[])