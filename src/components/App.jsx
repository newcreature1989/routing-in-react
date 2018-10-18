import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import "isomorphic-fetch";
import "es6-promise";
import Home from './Home'
import Films from './Films';
import People from './People';
import SingleFilm from './SingleFilm';
import Person from './Person';

class App extends Component {
    render() {
        return (
           <Fragment>
            <img 
        alt=""
        src="https://raw.githubusercontent.com/taniarascia/sandbox/master/ghibli/logo.png"
        />
            <Router>
                <Fragment>
                
                <Link to="/">
                    <button>Go Home</button>
                </Link>
                <Link to="/Films">
                    <button>Films</button>
                </Link>
                <Link to="/People">
                    <button>People</button>
                </Link>

                <Switch>
                    <Route exact path="/" component={Home} />     
                    <Route exact path="/Films" component={Films} />
                    <Route exact path="/People" component={People} />
                    <Route exact path="/films/:id" component={SingleFilm}  />
                    <Route exact path="/people/:id" component={Person} />
                </Switch>
                </Fragment>
            </Router>
            </Fragment>
        );
    }
}

export default App;