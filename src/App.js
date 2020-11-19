import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'

export default function App() {

    return (
        <Router>
            <Switch>
                <Route path="/chat" component={Chat} />
                <Route path="/" component={Join} />
            </Switch>
        </Router>
    )
}
