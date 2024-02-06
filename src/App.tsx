import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';

import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { DividerVertical } from './components/dividerVertical/DividerVertical';
import ContactForm from './components/ContactForm/ContactForm';
import Privacy from './pages/privacy/Privacy';
import Commande from './pages/commande/Commande';
import Service from './pages/service/Service';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';

function App() {
  return (
    <>
      <div className="App">
        <Header></Header>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/accueil" component={Home} />
            <Route exact path="/commande" component={Commande} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/a-propos" component={Privacy} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
          </Switch>
        </HashRouter>


        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
