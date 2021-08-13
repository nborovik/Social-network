import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import Messages from './componets/Messages/Messages';
import {BrowserRouter, Route} from "react-router-dom";
import Setting from "./componets/Setting/Setting";
import News from "./componets/News/News";
import Music from "./componets/Music/Music";


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/Profile'} component={Profile}/>
                    <Route path={'/Messages'} component={Messages}/>
                    <Route path={'/News'} component={News} />
                    <Route path={'/Music'} component={Music} />
                    <Route path={'/Setting'} component={Setting} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;