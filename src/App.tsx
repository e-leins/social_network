import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Setting/Setting";
import {Dialogs} from "./components/Dialogs/Dialogs";
import state, { RootStateType} from "./Redux/state";

type PropsType={
    state:RootStateType
    addPost:(message:string)=>void
    updateNewPostText:(newText: string) => void

}
function App(props:PropsType) {

    return (
                    <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={()=><Dialogs state={props.state.dialogsPage} />}/>
                    <Route path='/profile' render={()=><Profile profilePage={props.state.profilePage}
                                                                addPost={props.addPost}
                                                                newPostText={state.profilePage.newPostText}
                                                                updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='/news' render={()=><News/>}/>
                    <Route path='/music' render={()=><Music/>}/>
                    <Route path='/setting' render={()=><Setting/>}/>

                </div>
            </div>)

}
            export default App;