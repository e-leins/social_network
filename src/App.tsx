import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router";

function App() {
    return <div className='app-wrapper'>
         <Header/>
         <Navbar/>
         {/*<Profile/>*/}
        <div className="app-wrapper-content">
              <Route />
              <Route />

            <Dialogs/> </div>
    </div>;
}

export default App;
