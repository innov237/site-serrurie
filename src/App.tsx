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

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/accueil" component={Home} />
          <Route exact path="/commande" component={Portfolio} />
          <Route exact path="/service" component={Privacy} />
          <Route exact path="/a-propos" component={Privacy} />
          <Route exact path="/contact" component={Privacy} />
        </Switch>
      </HashRouter>
      <DividerVertical></DividerVertical>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}

export default App;
