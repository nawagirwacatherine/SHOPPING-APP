import "./skinpolish.css"
import {useState} from "react"
import skin from '../../images/skin.webp'
import data from '../../cart/data.jsx'
import ItemCard from '../../cart/Itemcard.jsx'

const SkinPolish = () => {
    const [showItems, setShowItems] = useState(false);
    return(
    <div className="skinpolish">

        <div className="skinpolish-product">
           <h2>Skin polish</h2>
          <img src={skin} alt=""  className="skin3img"/>
        </div>

        <h3>all day moisturized</h3>
        <button onClick={ ()=> setShowItems(!showItems)} className="toggle-button">
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
    )
}

export default SkinPolish;