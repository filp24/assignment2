import React from 'react';

const Adidas = (props) => {
    
    const theKey = () => {
        console.log(props.product_name);
    }
    const item = (
        <div className="card m-4 text-center" style={{width: "18rem"}}>
            <img className="card-img-top" src={props.img} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{props.product_name}</h5>
                        <p className="card-text"><strong style={{color: "green"}}>{props.price}</strong></p>
                    <button className="btn btn-primary btn-block" onClick={theKey}>Add to Cart</button>
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

export default Adidas;
