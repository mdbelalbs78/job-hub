import React, { useEffect, useState } from "react";
import "./ApplyDetails.css";
import { getShoppingCart } from "../../Utilitis/fakedb";
import DataPass from "../Product/DataPass/DataPass";


const ApplyDetails = ({ app }) => {

  const applyButton = getShoppingCart()
  // console.log(applyButton);

  const [products, setProducts] = useState([]);
   
  const [bt, setBt] = useState([])
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(()=>{
    const but = []
    for(const id in applyButton){
      const applyFound = products.find(pt=> pt.id === id)
      if(applyFound){
       but.push(applyFound);
      }
    }
    setBt(but)
  },[products])

  // console.log(bt)

  // useEffect kore data ante hobe
  // applyButton thake je data pabo setar upor for in korte hobe
  // useEffect thake je data pabo otar upor find chalabo for in er vitore
  // find kore je data pabo ota print kore dibo

  return (

    <div>
        {
          bt.map(ct => <DataPass
             key={ct.id}
             ct = {ct}
            ></DataPass>)
        }
        
    </div>

    
  );
};

export default ApplyDetails;
