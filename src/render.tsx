import  React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost, RootStateType, updateNewPostText} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree=(state:RootStateType)=>
{
  ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter><App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/></BrowserRouter> )
      </React.StrictMode>,
      document.getElementById('root')
  );
}
