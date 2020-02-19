import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.css';
import Overview from "./components/overview/ui/Overview";

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <Switch>
                    <Route path="/">
                        <Overview />
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
