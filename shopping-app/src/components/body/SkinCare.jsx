import "./skincare.css"
import { useState } from 'react';
import  skin1 from "../../images/skin1.jpg";
import data from '../../cart/data.jsx'
import ItemCard from '../../cart/Itemcard.jsx'

const SkinCare = () =>{
    const [showItems, setShowItems] = useState(false);
    return(
        <div className="skin-care">
        <div className="skincare-products"></div>
            <h2>Skin Care</h2>
         <img src={skin1} alt=""  className="skin1"/>
         
       

        <div  className="skincare-products">
            <h3>Skin Care products</h3> 
            <button onClick={() => setShowItems(!showItems)} className="toggle-button">
                {showItems ? "HideItems":"ShowItems"}
            </button>

            { showItems && (
           <div className="row justify-content-center">
            {data.productionData.map((item,index) =>{
            return (
                <ItemCard 
                title={item.titles}
                 desc ={item.desc} 
                 price={item.price} 
                 item = {item}
                 key={index}/>
            )
            })}
           </div>
           )}
        </div>

        </div>
    )
}

export default SkinCare;