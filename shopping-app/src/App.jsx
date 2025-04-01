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

 <h1> Cosmetics Shop</h1> 

 <p>We are at your service <br/> scroll down to search your products! </p>

    <TiShoppingCart className="logo" />
    <Cart />
  

</div>


<GeneralBody />
<Makeup/>
<Spur/>

<hr  className="line"/>
<Footer/>

</>
  )
}


export default App;
