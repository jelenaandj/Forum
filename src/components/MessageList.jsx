import React from 'react'
import Message from './Message'

export default function MessageList() {
    return (
        <div>
            <Message/>
            <form>
                <input type='text' placeholder='Discussion Name' />
                <input type='text' placeholder='New Message' />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}
