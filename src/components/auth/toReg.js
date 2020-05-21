import React, { Component, Fragment } from 'react';
//import {Redirect} from 'react-router-dom';
import SignUp from './SignUp';
//import Login from './Login';
import Navbar from '../home/navbar/navbar';

class toReg extends Component {

    render() {
        
        return (
            <Fragment>
                <Navbar />
                <div className="row">
                    <div className="col-md-4"></div>
                        
                    <div className="col-md-4 mt-5 pt-5">
                    
                        <SignUp />
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </Fragment>
        );
    }
}

export default toReg;