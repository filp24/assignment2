import React, { Component } from 'react';
import Zoom from '../../../assets/Images/zoom.jpg'

class Items extends Component {
    render() {

        const item = (
            <div className="card ml-5 mb-3 mt-3 text-center" style={{width: "18rem"}}>
                <img className="card-img-top" src={Zoom} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Item 1</h5>
                        <p className="card-text"><strong style={{color: "green"}}>₱1000</strong></p>
                        <button className="btn btn-primary btn-block" >Add to Cart</button>
                    </div>
            </div>
        );

        let items = [];
            items.push(item);

        return (
            <div className="row ml-3">
                {items}
            </div>
        );
    }
}

export default Items;