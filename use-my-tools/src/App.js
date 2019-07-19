import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/registration/Login";
import SignUp from "./components/registration/SignUp";
import ToolList from "./components/ToolComps/ToolList";
import ToolsUserIsBorrowing from "./components/UsersTools/ToolsUserIsBorrowing";
import AddATool from "./components/ToolComps/AddATool";

function App() {
    return (
        <Router>
            <div className="App">
                <Route exact path="/login" render={props => <Login {...props} />} />
                <Route exact path="/sign-up" render={props => <SignUp {...props} />} />
                <Route exact path="/borrowing" render={props => <ToolsUserIsBorrowing {...props} />} />
                <Route exact path="/add-tool" render={props => <AddATool {...props} />} />
                <Route path="/tool-list" render={props => <ToolList {...props} />} />
            </div>
        </Router>
        
    );
}

export default App;
