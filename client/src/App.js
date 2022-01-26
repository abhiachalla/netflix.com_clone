import "./App.css"
import Home from "./pages/homepage/Home.jsx";
import Watch from "./pages/watch/watch.jsx";
import Register from "./pages/register/register.jsx";
import Login from "./pages/login/login.jsx";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    
  } from "react-router-dom";



import React from 'react'
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {

    const {user} = useContext(AuthContext);
    return (
    //v 5.2.0
        <Router>
            <Switch>
    
                <Route exact path = "/">
                   {user ? <Home/> : <Redirect to="/register"/>} 
                </Route>

                <Route path = "/register">
                   {!user ? <Register/> : <Redirect to="/"/>} 
                </Route>

                <Route path = "/login">
                {!user ? <Login/> : <Redirect to="/"/>} 
                </Route>

                
                {
                    user && (
                        <>
                                <Route path = "/movies">
                                    <Home type = "movie"/>
                                </Route>

                                <Route path = "/series">
                                    <Home type = "Series"/>
                                </Route>

                                <Route path = "/watch">
                                    <Watch/>
                                </Route>
                        
                        </>
                    )
                }

            </Switch>
        </Router>


        //v 6
//     <Router>
//         <Routes>

// <Route exact path="/" element={<Home/>}>
// </Route>

// <Route path="/movies" element={<Home type="movie"/>}>
// </Route>

// <Route>    
// </Route>

// </Routes>
        
//     </Router>
    );
}

export default App;
