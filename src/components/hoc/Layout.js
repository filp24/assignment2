import React, { Component } from 'react';
import Navbar from '../../components/home/navbar/navbar';
import Sidebar from '../home/sidebar/Sidebar';
//import Items from '../../components/home/Items/Items';
import Cart from '../Checkout/Cart';
import {withRouter} from 'react-router-dom';
class Layout extends Component {
    render() {

        let disp = (
            <div className="container-fluid">
                <div className="row">
                
                <div className="col-md-12 bg-secondary p-0">
                    <Navbar /> 
                    <main>
                        {this.props.children}
                    </main>
                </div>
            </div>
            </div>
        );

     
       console.log(this.props.location.pathname)

       if(this.props.location.pathname === "/cart"){
           disp = <Cart />
       }
        return (     
                <div>
                    {disp}
                </div>
        );
    }
}

export default withRouter(Layout);