import "./massage.css"
import { useState } from "react";
import massage from "../../images/massage.jpg"
import data from '../../cart/data.jsx'
import ItemCard from '../../cart/Itemcard.jsx'


const Massage = () =>{
  const [showItems, setShowItems] = useState(false);
    return (
     <div className="body-scrub">
      <h2>Body Massage</h2>

      <div className="bodyscrub-products">
        <img src={massage} alt="" className="bodyscrub-img"/>
      </div>

      <div>
        <h3>Relax every body cell</h3>
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

export default Massage;