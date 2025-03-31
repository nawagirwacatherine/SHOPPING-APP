import "./nailpolish.css"
import {useState} from "react";
import nail from "../../images/nail.jpg"
import data from '../../cart/data.jsx'
import ItemCard from '../../cart/Itemcard.jsx'


const NailPolish = () => {
    const [showItems, setShowItems] = useState(false);
    return (
        <div className="nail-polish">
            <div className="nail-polishproducts">
                <h2>Nail polish</h2>
             <img src={nail} alt="" className="nail" />

            </div>

            <div>
                <h3>You want to paint the true beauty?</h3>
                <button onClick={ () => setShowItems(!showItems)} className="toggle-button">
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

export default NailPolish;