import { useState } from "react";

import "./App.css";
import Home from "./components/Home/Home";
import Header from "./component/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>
       <Home></Home>
    </div>
  );
}

export default App;
