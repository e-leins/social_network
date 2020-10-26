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
import {store, StoreType} from "./Redux/state";

type PropsType = {
    store: StoreType
}

export const App: React.FC<PropsType> = (props) => {
    const state = store.getState();

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => <Dialogs state={state.dialogsPage}/>}/>
                <Route path='/profile' render={() => <Profile profilePage={state.profilePage}
                                                              dispatch={store.dispatch.bind(props.store)}
                                                              newPostText={state.profilePage.newPostText}
                                                            />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/setting' render={() => <Setting/>}/>

            </div>
        </div>)
}
