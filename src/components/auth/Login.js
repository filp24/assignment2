import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="card">
                <h5 className="card-header">Welcome to Shoepy!</h5>
                <div className="card-body">
                    <h5 className="card-title text-center">Sign Up</h5>
                    <form action="" className="text-center">
                        <div className="form-group">
                            <input type="email" name="email" placeholder="E-mail Address" className="w-100" required/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" placeholder="Password" className="w-100" required/>
                        </div>
                        <div className="form-group mt-3">
                            <button className="btn btn-primary btn-block ">Log in</button>
                        </div>
                        <Link to="/signup">Create an Account</Link>
                    </form>
                   
                </div>
            </div>
    );
};

export default Login;