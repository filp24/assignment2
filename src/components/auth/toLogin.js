import React, { Component, Fragment } from 'react';
import Login from './Login';
import Navbar from '../home/navbar/navbar';
class toLogin extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <div className="row">
                    <div className="col-md-4"></div>
                        
                    <div className="col-md-4 mt-5 pt-5">
                        <Login />
                    </div>

                    <div className="col-md-4"></div>
                </div>
            </Fragment>
        );
    }
}

export default toLogin;