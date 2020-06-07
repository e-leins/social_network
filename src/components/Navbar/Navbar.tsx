import React from "react";
import classes from "./Navbar.module.css";
 export function Navbar() {
     return (
         <nav className={classes.nav}>
             <ul>
                 <li className={classes.item}> <a href ="/profile">Profile </a></li>
                 <li className={classes.item}><a href ="/dialogs">Message</a></li>
                 <li className={classes.item}><a href ="/news">News</a></li>
                 <li className={classes.item}><a href ="/music">Music</a></li>
                 <li className={classes.item}><a href ="/setting">Setting</a></li>
             </ul>
         </nav>
     )
}