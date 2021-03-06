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
import {store, StoreType} from "./Redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type PropsType = {
    store: StoreType
}

export const App: React.FC<PropsType> = (props) => {


    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">

                <Route path='/dialogs' render={() =>
                    <DialogsContainer store={props.store}/>}/>
                <Route path='/profile' render={() => <Profile store={props.store}
                                                            />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/setting' render={() => <Setting/>}/>

            </div>
        </div>)
}
