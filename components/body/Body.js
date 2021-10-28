import React from 'react';
import Menu from './Menu';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { Route, Redirect, Switch } from 'react-router-dom';

const Body = () => {
    return (
        <div>
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/menu" exact component={Menu} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/about" exact component={About} />
                <Redirect from="/" to="/home" />
            </Switch>
        </div>
    );
}

export default Body;