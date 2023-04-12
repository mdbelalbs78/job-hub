import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../Utilitis/fakedb';

const JobApply = () => {
    const [apply,setApply] = useState([]);
    
  
    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setApply(data))
    },[])

    useEffect(()=>{       
    let cart = [];
    const saveCart = getShoppingCart();
    
    for(const id in saveCart){
        const foundProduct = apply.find(product => product.id == id)
        
        if(foundProduct){
           
            foundProduct.quantity = saveCart[id];
            cart.push(foundProduct);
        }
        console.log(cart)
    }
    setApply(cart);
    },[])
    console.log(apply);
    return (
        <div>
            {/* {
               apply .map(app => <ApplyDetails
                key={app.id}
                app={app}
               ></ApplyDetails>) 
            } */}
        </div>
    );
};

export default JobApply;