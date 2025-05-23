import "./App.css"
import {useState,useEffect} from  "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import GeneralBody from "./Pages/GeneralBody.jsx"
import Makeup from "./Pages/Makeup.jsx"
import Spur from "./Pages/Spur.jsx"
import Footer from "./Pages/Footer.jsx"
import { CartProvider } from "react-use-cart";
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


 <h1> Glow cosmetics & spur</h1> 

 <p>We are at your service <br/> scroll down to search your products! </p>

    <CartProvider>

   
   
  




<GeneralBody />
<Makeup/>
<Spur/>

</CartProvider>

</div>
<Footer/>

</>
  )
}


export default App;
