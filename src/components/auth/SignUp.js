import React from 'react';
import { Link } from 'react-router-dom';


const signUp = () => {
    return (
    <div className="card">
                <h5 className="card-header">Create an Account</h5>
                <div className="card-body">
                    <h5 className="card-title text-center">Sign Up</h5>
                    <form action="" className="text-center">
                        <div className="form-group">
                            <input type="text" name="firstName" placeholder="First Name" className="w-100" required autoFocus/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="LastName" placeholder="Last Name" className="w-100" required/>
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="E-mail Address" className="w-100" required/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" placeholder="Password" className="w-100" required/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block">Sign Up</button>
                            
                        </div>
                        <Link to="/login">Alredy have an account?</Link>
                    </form>
                    
                </div>
            </div>
);
};
export default signUp;