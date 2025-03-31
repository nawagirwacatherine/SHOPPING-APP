import "./bodyscrub.css"
import {useState} from "react";
import bodyscrub from "../../images/bodyscrub.jpg"
import data from '../../cart/data.jsx'
import ItemCard from '../../cart/Itemcard.jsx'


const BodyScrub = () =>{
  const [showItems, setShowItems] = useState(false);
    return (
     <div className="body-scrub">
      <h2>Body Scrub</h2>

      <div className="bodyscrub-products">
        <img src={bodyscrub} alt="" className="bodyscrub-img"/>
      </div>

      <div>
        <h3>Smooth Skin texture</h3>
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

export default BodyScrub;