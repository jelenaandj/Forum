import React from 'react'
import { Switch, Route } from 'react-router-dom'
import DiscussionsList from '../components/DiscussionsList'
import Register from '../components/Register'
import LogIn from '../components/LogIn'
import Profile from '../components/Profile'
import MessageList from '../components/MessageList'


export default function Content({setUser,user}) {
    return (
        <main className='main'>
        <Switch>
            <Route exact path='/' component={DiscussionsList} />
            <Route path='/register' component={(props) => <Register setUser={setUser} {...props}/>} />
            <Route path='/login' component={(props) => <LogIn setUser={setUser} {...props}/>} />
            <Route path='/MessageList/:topic_id' component={(props) => <MessageList {...props}/>} />
            <Route path='/profile/:username' component={(props) => <Profile setUser={setUser} {...props}/>} />
        </Switch>
        </main>
    )
}
