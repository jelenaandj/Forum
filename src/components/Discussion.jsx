import React from 'react'
import MessageList from './MessageList'

export default function Discussion() {
    return (
        <div>
            <p>{}</p>
            {/* <MessageList/> */}
            <form>
                <input type='text' placeholder='New Message' />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}
