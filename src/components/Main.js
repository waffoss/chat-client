import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './common/Header';
import Footer from './common/Footer';

import Login from './auth/Login';
import Register from './auth/Register';

import Home from './pages/Home';

import Chat from './pages/Chat';


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogged: false
        }

        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
    }


    componentDidMount() {
        if (localStorage.getItem('authToken')) {
            this.setState({ isLogged: true });
        }
    }

    logIn(token) {
        localStorage.setItem('authToken', token);
        this.setState({ isLogged: true });
    }

    logOut() {
        localStorage.clear();
        this.setState({ isLogged: false });
    }


    render() {
        return (
            <div>


                {this.state.isLogged ?
                    <div><Header  logOut={this.logOut}/> 
                        <Chat />
                        <Footer /></div> 
                        : <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route path="/chat/all" component={Chat} />
                    </Switch>}
            </div>
        );
    }
}

export default Main;
