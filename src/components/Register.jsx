import React, { useState,useEffect } from 'react'
import { register } from '../service'


function Register({setUser,history}) {

    const[name,setName]=useState('')
    const[surname,setSurname]=useState('')
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[confirmPassword,setConfirmPassword]=useState('')
    const[issamePass,setIsSamePass]=useState('')


    useEffect(() => {
        setIsSamePass(confirmPassword === password)
    },[confirmPassword,password])

    function handleSubmit(){
        if(!issamePass)
            return
        register({name,surname,username,email,password})
        .then(data =>  {
            if(data.success) {
                setUser(data.user)
                history.push('/')
            }
            else console.log('Not registered')
        })
    }

    return (
        <form className='log'>
            <input type="text" placeholder="Name" required onInput={e => {
                setName(e.target.value)
            }}/>
            <input type="text" placeholder="Surname" required onInput={e => {
                setSurname(e.target.value)
            }}/>

            <input type="text" placeholder="Username" required onInput={e => {
                setUsername(e.target.value)
            }}/>  
            <input type="email" placeholder="Email" required onInput={e => {
                setEmail(e.target.value)
            }}/>
            <input type="password" placeholder="Password" required onInput={e => {
                setPassword(e.target.value)
            } }/>
            <input type="password" placeholder="Confirm Password" required onInput={e => {
                setConfirmPassword(e.target.value)
            }} />
                

            <input type="submit" value="Register" onClick={e => {e.preventDefault();handleSubmit()}} />
        </form>
    )
}
export default Register