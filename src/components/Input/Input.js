import React, { useState } from 'react'
import './Input.css'

export default function Input({ message, setMessage, sendMessage }) {
    const [messages, setMessages] = useState([])

    return (
        <form className="form">
            <input 
                className="input"
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e => setMessage(e.target.value))} 
                onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
            />
            <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
        </form>
    )
}
