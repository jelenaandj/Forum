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
                // history.push('/memory-game')
                console.log('logged in')
            }
            else console.log('Not Logged in')
        })
    }
    return (
        <form>
            <input type="text" placeholder="username" required onInput={e => {
                setUsername(e.target.value)
            }}/>
            <input type="password" placeholder="Шифра" required onInput={e => {
                setPassword(e.target.value)
            } }/>
            <input type="submit" value="Улогуј се" onClick={(e) => {
                e.preventDefault()
                handleSubmit()
            }} />
        </form>
    )
}
export default withRouter(LogIn)