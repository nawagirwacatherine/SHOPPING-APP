import "./App.css"
import {useState,useEffect} from  "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { TiShoppingCart } from "react-icons/ti";
import GeneralBody from "./Pages/GeneralBody.jsx"
import Makeup from "./Pages/Makeup.jsx"
import Spur from "./Pages/Spur.jsx"
import Footer from "./Pages/Footer.jsx"
import Cart from "./Pages/Cart"; 
const App = () => {

  const [items, setItems] = useState([]);

  useEffect (() => {
    fetch('http://localhost:5000/api/items')
    .then((response) => response.json())
    .then((data) => setItems(data));
  }, []);

  return(
    <>
<div className="app">

 <h1> Mulungi Cosmetics Shopping app</h1> <div className="icon"><TiShoppingCart className="logo" />  <Cart /></div>

</div>


<GeneralBody />
<Makeup/>
<Spur/>
<Footer/>

</>
  )
}


export default App;
