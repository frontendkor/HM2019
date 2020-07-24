import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";

import { Container, Row } from "react-materialize";

import Preloader from "./components/Preloader/Preloader";

import SearchPage from "./pages/SearchPage/SearchPage";
import BanerPage from "./pages/BanerPage/BanerPage";
import PizzaPage from "./pages/CatalogPages/PizzaPage";
import SetPage from "./pages/CatalogPages/SetPage";
import BurgerPage from "./pages/CatalogPages/BurgerPage";
import DrinksPage from "./pages/CatalogPages/DrinksPage";
import DeliveryPage from "./pages/DeliveryPage/DeliveryPage";
import CartPage from "./pages/CartPage/CartPage";
import ActionsPage from "./pages/ActionsPage/ActionsPage";

import DeliveryTerms from "./components/DeliveryTerms/DeliveryTerms";

import Footer from "./components/Footer/Footer";

import Nav from "./components/Nav/Nav";
import NavRight from "./components/Nav/NavRight";
import { scrollTop } from "./secondaryFunctions/secondaryFunctions";

import Logo from "./components/Logo/Logo";
import Profile from "./components/Profile/Profile";
import AuthorizationFormContainer from "./components/Forms/AuthorizationForm/AuthorizationFormContainer";
import RegistrationFormContainer from "./components/Forms/RegistrationForm/RegistrationFormContainer";
import SettingsFormContainer from "./components/Forms/SettingsForm/SettingsFormContainer";

class App extends Component {
  render() {
    const { sum } = this.props;
    return (
      <Router
        basename={
          document.location.host === `frontendkor.github.io`
            ? `/Housemix2019`
            : ``
        }
      >
        <Preloader />
        <div className="App">
          <header>
            <Nav />
            <NavRight sum={sum} classis="HeaderNavRight" />
            <Link to="/" className="HeaderLogo" onClick={scrollTop}>
              <Logo />
            </Link>
          </header>
          <div className="content">
            <Route exact path="/" component={BanerPage} />
            <Container>
              <Switch>
                <Route path="/search" component={SearchPage} />
                <Route path="/pizza" component={PizzaPage} />
                <Route path="/sets" component={SetPage} />
                <Route path="/burgers" component={BurgerPage} />
                <Route path="/drinks" component={DrinksPage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/delivery-payment" component={DeliveryPage} />
                <Route path="/profile" component={Profile} />
                <Route
                  path="/authorization"
                  component={AuthorizationFormContainer}
                />
                <Route
                  path="/registration"
                  component={RegistrationFormContainer}
                />
                <Route path="/settings" component={SettingsFormContainer} />
                <Route path="/actions" component={ActionsPage} />
              </Switch>
              <Row>
                <DeliveryTerms />
              </Row>
            </Container>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = store => {
  return {
    sum: store.cartData.sum,
    isAuth: store.profile.isAuth
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
