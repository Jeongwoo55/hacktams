import React from 'react';
import Menu from './components/menu';
import About from './components/about';
import Home from './components/home';
import Footer from './components/footer';
import Event from './components/event';

import './app.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.home = React.createRef();
        this.about = React.createRef();
        this.events = React.createRef();
        this.contact = React.createRef();
    }

    navigate = (location) => this[location].current.scrollIntoView({ behavior: 'smooth' });

    render() {
        return (
            <div className="app">
                <Menu navigate={this.navigate} />
                <Home reference={this.home} />
                <About reference={this.about} />
                <div className="events" ref={this.events}>
                    <h1 className="events-title">Events</h1>
                    <Event year="2021" />
                    <Event year="2020" />
                    <Event year="2019" />
                </div>
                <Footer reference={this.contact} />
            </div>
        );
    }
}

export default App;
