import "./lotion.css"
import {useState} from 'react';
import lotion from"../../images/lotion.gif"
import BodyLotiondata from '../../cart/BodyLotiondata.jsx'
import ItemCard from '../../cart/Itemcard.jsx'

const Lotion = () =>{

    const [showItems, setShowItems] = useState(false);

    return (
        <div className="lotion">

        <div className="lotion-product"></div>
         <h2>Body lotions</h2>
        <img src={lotion} alt=""  className="lotionimg"/>

        <div>
        <h3> Soft and smooth Skin </h3>

        <button onClick={()=> setShowItems(!showItems) } className="toggle-button">
            {showItems ? "HideItems":"showItems"}
        </button>

        
        { showItems && (
           <div className="row justify-content-center">
            {BodyLotiondata.productionData.map((item,index) =>{
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

export default Lotion