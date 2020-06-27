import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Setting/Setting";
import {Dialogs} from "./components/Dialogs/Dialogs";

function App(props:any) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={()=><Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>}/>
                    <Route path='/profile' render={()=><Profile posts={props.state.profilePage.posts}/>}/>
                    <Route path='/news' render={()=><News/>}/>
                    <Route path='/music' render={()=><Music/>}/>
                    <Route path='/setting' render={()=><Setting/>}/>




                </div>
            </div>
        </BrowserRouter>)
}
            export default App;