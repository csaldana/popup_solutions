import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <React.Fragment>
      <div id="page-wrapper">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
