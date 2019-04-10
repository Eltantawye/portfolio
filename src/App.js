import React, { Component } from 'react';
import {BrowserRouter , Route ,Switch} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/landingpage';
import Contact from './components/contact';
import Projects from './components/projects';


class App extends Component {

  render() {

    return (
      <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path = "/" component={Home} />
          <Route path = "/projects" component={Projects} />

          <Route path = "/contact" component={Contact} />
        </Switch>


        </div>
      </BrowserRouter>
    );
  }
}

export default App;
