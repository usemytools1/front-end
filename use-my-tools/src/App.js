import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/registration/Login";
import ToolList from "./components/ToolComps/ToolList";

function App() {
    return (
        <Router>
            <div className="App">
                <Route exact path="/login" render={props => <Login {...props} />} />
                <Route path="/tool-list" render={props => <ToolList {...props} />} />
            </div>
        </Router>
        
    );
}

export default App;
