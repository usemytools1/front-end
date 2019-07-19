import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Login from "./components/registration/Login";
import SignUp from "./components/registration/SignUp";
import ToolList from "./components/ToolComps/ToolList";
import ToolsUserIsBorrowing from "./components/UsersTools/ToolsUserIsBorrowing";
import ToolsUserOwns from "./components/UsersTools/ToolsUserOwns";
import AddATool from "./components/ToolComps/AddATool";
import './App.css'

function App() {
    return (
        <Router>
            <div className="App">
                <nav className="navBar">
                    <ul className="navBarList">
                        <li className="navBarItem">
                            <NavLink className="item" to="/login">Login</NavLink>
                        </li>
                        <li className="navBarItem">
                            <NavLink className="item" to="/sign-up">Sign up</NavLink>
                        </li>
                        <li className="navBarItem">
                            <NavLink className="item" to="/borrowing">Borrowed Tools</NavLink>
                        </li>
                        <li className="navBarItem">
                            <NavLink className="item" to="/owns">Owned Tools</NavLink>
                        </li>
                        <li className="navBarItem">
                            <NavLink className="item" to="/add-tool">Add A Tool</NavLink>
                        </li>
                        <li className="navBarItem">
                            <NavLink className="item" to="/tool-list">View All Tools</NavLink>
                        </li>
                    </ul>
                </nav>
                <Route exact path="/login" render={props => <Login {...props} />} />
                <Route exact path="/sign-up" render={props => <SignUp {...props} />} />
                <Route exact path="/borrowing" render={props => <ToolsUserIsBorrowing {...props} />} />
                <Route exact path="/owns" render={props => <ToolsUserOwns {...props} />} />
                <Route exact path="/add-tool" render={props => <AddATool {...props} />} />
                <Route path="/tool-list" render={props => <ToolList {...props} />} />
            </div>
        </Router>

    );
}

export default App;
