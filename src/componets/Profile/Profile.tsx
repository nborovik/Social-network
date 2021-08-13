import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div>
             <ProfileInfo />
            <div>
                <img src='https://static-cse.canva.com/blob/249699/pexels-vierro-3629813.jpg' width='150px' height='150px'/>
            </div>
            <div>
                <img src='http://v.img.com.ua/b/600x500/4/3a/3d8751671af905f3f91b81571abbd3a4.png' width='150px' height='150px'/>
                description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;