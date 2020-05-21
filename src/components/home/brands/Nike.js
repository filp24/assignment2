import React, {useState} from 'react';
import Cart from '../../Checkout/Cart';
const Nike = (props) => {
    
    const addHandler = () => {
        <p>asas</p>
    }
    const item = (
        <div className="card m-4 text-center" style={{width: "18rem"}}>
            <img className="card-img-top" src={props.img} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{props.product_name}</h5>
                        <p className="card-text"><strong style={{color: "green"}}>{props.price}</strong></p>
                    <button 
                        className="btn btn-primary btn-block" 
                        onClick={() => this.addHandler}>Add to Cart</button>
                </div>
        </div>
    );

    

    let items = [];

    items.push(item);

    return (
        <div>
            {items}
        </div>
    );
};

export default Nike;
