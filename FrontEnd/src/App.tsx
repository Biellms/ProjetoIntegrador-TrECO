import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Cadastro from './paginas/cadastro/Cadastro';
import './App.css';
import NavBar from './components/estaticos/navbar/NavBar';

function App() {
  return (
    <Router>

        <NavBar />

          <Switch>
            <div style={{minHeight: '100vh'}}>
            <Route exact path="/">
              <Login />
              </Route>

            <Route path="/login">
                <Login />
              </Route>

              <Route path="/cadastro">
                <Cadastro />
              </Route>

              <Route path="/home">
                <Home />
              </Route>
            </div>
          </Switch>

        <Footer />

      </Router>
  );
}

export default App;