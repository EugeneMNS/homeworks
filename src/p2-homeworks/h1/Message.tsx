import { type } from 'os'
import React from 'react'
import  s  from './Message.module.css'
type MessagePropseType = {
    avatar: string
    name: string
    message: string
    time: string
}
function Message(props: MessagePropseType) {
    return (
        <div className= {s.message}>
            <img className={s.avatar} src={props.avatar} alt="avatar"/>
            <div className={s.message__angle}/>
            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}


export default Message
