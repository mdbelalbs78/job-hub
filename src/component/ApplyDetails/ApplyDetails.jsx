import React, { useEffect, useState } from "react";
import "./ApplyDetails.css";
import { getShoppingCart } from "../../Utilitis/fakedb";
import DataPass from "../Product/DataPass/DataPass";

const ApplyDetails = () => {
  const applyButton = getShoppingCart();
  const [products, setProducts] = useState([]);
  const [apps, setApps] = useState(false);
  const [bt, setBt] = useState([]);

  const [news,setNews] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const but = [];
    for (const id in applyButton) {
      const applyFound = products.find((pt) => pt.id === id);
      if (applyFound) {
        but.push(applyFound);
      }
    }
    setNews(but)
    setBt(but);
  }, [products]);


  const handleFullTime = () =>{
      const newsState = bt.filter(p => p.button1 === 'Remote')
      setNews(newsState);
  }

  const handleTimeRemote = () => {
    const newsState = bt.filter(p => p.button1 === 'Onsite')
    setNews(newsState);
  }

  return (
    <div className="text-end pr-10 m-16">
      <div className="dropdown dropdown-bottom">
        <label tabIndex={0} className="btn m-1">
          Click
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a onClick={handleFullTime}>Full Time</a>
          </li>
          <li>
            <a onClick={handleTimeRemote}>Remote</a>
          </li>
        </ul>
      </div>
      <div className="mx-20">
        {news.map((ct) => (
          <DataPass key={ct.id} ct={ct}></DataPass>
        ))}
      </div>
    </div>
  );
};

export default ApplyDetails;
