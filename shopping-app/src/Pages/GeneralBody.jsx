import "./generalbody.css"
import SkinCare from "../components/body/SkinCare.jsx"
import  BodySplash from "../components/body/BodySplash.jsx"
import HairSpray from "../components/body/HairSpray.jsx"
import Lotion from "../components/body/Lotion.jsx"
import Wigs from "../components/body/Wigs.jsx"
import Jerry from "../components/body/Jerry.jsx"
import { CartProvider } from "react-use-cart";
import { TiShoppingCart } from "react-icons/ti";
import Cart from "./Cart.jsx"; 


const GeneralBody = () => {
    return(
     <>
      <div className="general-body">

      <CartProvider>
      <TiShoppingCart className="logo" /><Cart/>
< SkinCare /> 
 
  <BodySplash /> 
  <HairSpray />
  <Lotion />
  <Wigs />
  <Jerry />

  
  </CartProvider> 
 </div>
     

      </>
    )
} 

export default GeneralBody;