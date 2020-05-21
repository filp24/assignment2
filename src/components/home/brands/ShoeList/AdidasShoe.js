import React, { Component } from 'react';
import Adidas from '../Adidas';
class AdidasShoe extends Component {

    state = {
        shoe: [
            {brand: "Adidas", price: "₱1000", name: "Droses"},
            {brand: "Adidasasas", price: "₱1000", name: "Drossse"},
            {brand: "Adiprene", price: "₱1090", name: "Derrick"},
            {brand: "Adiprene", price: "₱1090", name: "Derrick"},
            {brand: "Adiprene", price: "₱1090", name: "Derrick"},
            {brand: "Adiprene", price: "₱1090", name: "Derrick"}
        ]
    }

    render() {

        const num = Object.keys(this.state.shoe).length;
        
        const shoes = (
            (this.state.shoe||[]).map(prod => (
                <Adidas
                   key={prod.name}
                   img={require('../../../../assets/Images/adidas.jpg')} 
                   product_name={prod.name} 
                   price={prod.price}
                   num={num}
                    />    
                 )) 

                 
        );     
        
        return (
            <div className="container-fluid">
                <div className="row">
                    {shoes}
                </div>
            </div>
        );
    }
}

export default AdidasShoe;