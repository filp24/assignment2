import React, { Component } from 'react';
import Nike from '../Nike';
class NikeShoe extends Component {

    state = {
        shoe: [
            {brand: "Nike", price: "₱1000", name: "Lebron"},
            {brand: "Nike", price: "₱1000", name: "Kobe"},
            {brand: "Nike", price: "₱1000", name: "DWade"},
            {brand: "Nike", price: "₱1000", name: "Bosh"},
            {brand: "Nike", price: "₱1000", name: "Kyrie"},
            {brand: "Nike", price: "₱1000", name: "Carter"},
        ]
    }

    render() {

        const num = Object.keys(this.state.shoe).length;
        
        const shoes = (
            (this.state.shoe||[]).map(prod => (
                <Nike
                   key={prod.name}
                   img={require('../../../../assets/Images/zoom.jpg')} 
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

export default NikeShoe;