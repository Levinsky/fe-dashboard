import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Overview from "./components/overview/Overview";

function App() {
  return (
    <div>
        <Router>
            <div>
                <Switch>
                    <Route path="/overview">
                        <Overview />
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
