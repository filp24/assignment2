import React, { Component } from 'react';

class navbar extends Component {
    render() {
        return (
            
          <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-sm bg-dark">

              <h4 className="text-white mr-5">Shoepy</h4>
              <ul className="nav navbar-nav navbar-right">
                <li className="nav-item ">
                  <a className="nav-link text-white " href="#">Cart</a>
                </li>
                
              </ul>

              </nav>
          </div>
            
        );
    }
}

export default navbar;