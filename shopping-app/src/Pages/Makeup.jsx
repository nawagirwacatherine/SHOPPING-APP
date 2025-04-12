
import "./makeup.css"
import Lipsticks from "../components/bodydesign/Lipsticks.jsx"
import NailPolish from "../components/bodydesign/NailPolish.jsx"
import SkinPolish from "../components/bodydesign/SkinPolish.jsx"
import  Naturals from "../components/bodydesign/Naturals.jsx"
import { CartProvider } from "react-use-cart";



const Makeup = () => {
    return (
  <>
        
        <p>  we are curious about your classy and elegant look.<br/>
        Provided you trust us we shall make it happen.<br/>
        Making up is a daily routine a classy and well kempt lady has to look at every day.<br/>
        As a human of value and class we are here to sort out your makeup daily issues.


        </p>
        <div className="makeup">
        <CartProvider>
        <Lipsticks/>
        <NailPolish/>
        <SkinPolish/>
        <Naturals/>
        </CartProvider>
        </div>
        </>
    )
}

export default Makeup;