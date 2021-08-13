import React from "react";
import s from './Post.module.css';

type PostType = {
    message: string;
}

const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src='https://i.pinimg.com/280x280_RS/ca/c1/94/cac194a7c5b3ff726fd6c6a4fe714267.jpg'/>
            {props.message}
            <div>
                <span>Like</span>
            </div>

        </div>
    )
}



export default Post;


/*
<div className={s.item}>
                    <img src='https://www.vokrug.tv/pic/person/e/e/5/4/ee54d6e76295bf9d955c93fdd9e2285a.jpeg' />
                    post 2
                </div>
                <div className={s.item}>
                    <img src='https://i.pinimg.com/474x/fc/99/08/fc9908848812ef6ef8df75e3b7f1e18b.jpg' />
                    post 3
                </div>
                <div className={s.item}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxx-8P6fbKYQPS4AcCHuX8SSPE9v45bKtQPg&usqp=CAU' />
                    post 4
                </div>
                <div className={s.item}>
                    post 5
                </div>
                <div className={s.item}>
                    post 6
                </div>
* */