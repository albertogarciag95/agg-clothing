import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";

import Header from "./components/header/header.component";
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {
  
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])
 
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signIn' render={() => 
          currentUser ? <Redirect to='/' /> : <SignInAndSignUp />} />
        <Route exact path='/checkout' component={CheckoutPage} />
      </Switch>
    </div>
  );
}
// without reselect: currentUser is a string (primitive), 
// so every state change won't actually re-render App component if currentUser remains the same value

// const mapStateToProps = state => ({
//   currentUser: selectCurrentUser(state)
// });

// with reselect: 

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
