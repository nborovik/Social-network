import React from "react";
import { NavLink } from "react-router-dom";
import s from './Messages.module.css';
import * as path from "path";

const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type DialogItemType = {
    name: string,
    id: string,
}

const Message = (props: MessageType) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}


type MessageType = {
    message: string,
}


const Messages = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Natasha'} id={'1'} />
                <DialogItem name={'Andrey'} id={'2'} />
                <DialogItem name={'Viktor'} id={'3'} />
                <DialogItem name={'Dasha'} id={'4'} />
                <DialogItem name={'Marina'} id={'5'} />


            </div>
            <div className={s.messages}>
                <Message message={"Hi!"} />
                <Message message={"Yessssssssssssssss"} />
                <Message message={"Nooooooooooooooooo"} />
            </div>
        </div>
);
}

export default Messages

