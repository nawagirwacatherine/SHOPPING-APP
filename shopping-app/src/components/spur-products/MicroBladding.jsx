import "./microbladding.css"
import {useState} from 'react';
import microneddling from "../../images/microneddling.webp"
import data from '../../cart/data.jsx'
import ItemCard from '../../cart/Itemcard.jsx'


const MicroBladding = () =>{
  const [showItems, setShowItems] = useState(false);
    return (
     <div className="body-scrub">
      <h2>MicroBladding</h2>

      <div className="bodyscrub-products">
        <img src={microneddling} alt="" className="bodyscrub-img"/>
      </div>

      <div>
        <h3>your skin relaxation</h3>
        <button onClick={ () =>setShowItems(!showItems)}  className="toggle-button">
          {showItems ? "HideItems" : "ShowItems"}
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

export default MicroBladding;