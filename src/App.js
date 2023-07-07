import React from "react"
import NavBar from "./components/ui/navBar"
import { Route, Switch, Redirect } from "react-router-dom"
import Main from "./layouts/main"
import Login from "./layouts/login"
import Users from "./layouts/users"

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/users/:userId?/:edit?" component={Users} />
                <Redirect to="/" />
            </Switch>
        </>
    )
}

export default App
