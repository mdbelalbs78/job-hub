import { useState } from "react";

import "./App.css";
import Header from "./component/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    

    <div className="App">
      <Header></Header>
       <Outlet></Outlet>
      
    </div>
  );
}

export default App;
