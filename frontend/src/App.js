import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AboutUs from './components/about-us/AboutUs';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Store from './components/store/Store';
import CartScreen from './screens/CartScreen';
import SupportScreen from './screens/SupportScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='main'>
        <Route path='/' component={HomeScreen} exact />
        <Container>
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/store' component={Store} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/support' component={SupportScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          {/* <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          /> */}
          {/* store for params and keyword */}
          <Route path='/search/:keyword' component={Store} exact />
          <Route path='/store/page/:pageNumber' component={Store} />
          <Route
            path='/store/search/:keyword/page/:pageNumber'
            component={Store}
            exact
          />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
