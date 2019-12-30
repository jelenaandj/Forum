import React, { useState } from 'react';
import { login } from '../service';
import { withRouter } from 'react-router-dom'



function LogIn({setUser,history}) {

    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')

    function handleSubmit(){
        login({username,password})
        .then(data =>  {
            if(data.success) {
                setUser(data.user)
                history.push('/')
                console.log('logged in')
            }
            else console.log('Not Logged in')
        })
    }
    return (
        <form class='log'>
            <input type="text" placeholder="username" required onInput={e => {
                setUsername(e.target.value)
            }}/>
            <input type="password" placeholder="password" required onInput={e => {
                setPassword(e.target.value)
            } }/>
            <input type="submit" value="Log in" onClick={(e) => {
                e.preventDefault()
                if(username!=='' && password!==''){
                    handleSubmit()
                }else{
                    alert('Please enter your password and username')
                }
                
            }} />
        </form>
    )
}
export default withRouter(LogIn)