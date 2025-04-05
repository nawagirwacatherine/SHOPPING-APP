import "./hair-spray.css"
import {useState} from 'react';
import hairspray1 from "../../images/hairspray1.jpg"
import HairSpraydata from '../../cart/HairSpraydata.jsx'
import ItemCard from '../../cart/Itemcard.jsx'

const HairSpray = () => {

    const [showItems, setShowItems] = useState(false);
    return(
        <div className="hair-spray">
            <div className="hair-product"></div>
            <h2>Hair Sprays</h2>
        <img src={hairspray1} alt=""   className="stockimg" />

        <div>
            <h3>Smooth and strong texture</h3>

            <button onClick={() => setShowItems(!showItems)} className="toggle-button">
                {showItems ? "HideItems":"ShowItems"}
            </button>

            { showItems && (
           <div className="row justify-content-center">
            {HairSpraydata.productionData.map((item,index) =>{
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

export default HairSpray;