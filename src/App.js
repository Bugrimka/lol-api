import {ChampionsList} from "./components/ChampionsList";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {Champion} from "./components/Champion";

export const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/:id">
                    <Champion/>
                </Route>
                <Route path="/">
                    <ChampionsList/>
                </Route>
            </Switch>
        </Router>
    )
}