import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Layout from '../../hoc/Layout';
import AdidasShoe from '../brands/ShoeList/AdidasShoe';
import NikeShoe from '../brands/ShoeList/NikeShoe';
import Cart from '../../Checkout/Cart';
class Display extends Component {

    

    render() {

       
        const display = (
            <Layout>
              <Switch>
                <Route path="/nike" exact component={NikeShoe} /> 
                <Redirect from="/" to="/nike" />
                <Route path="/adidas" exact component={AdidasShoe}/>
                <Route path="/cart" exact component={Cart}/>
              </Switch>
            </Layout>
          );

        return (
            <div>
                {display}
            </div>
        );
    }
}

export default Display;