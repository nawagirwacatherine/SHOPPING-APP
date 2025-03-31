import "./lipstick.css"
import {useState} from "react";
import lipstick from "../../images/lipstick.webp"
import data from '../../cart/data.jsx'
import ItemCard from '../../cart/Itemcard.jsx'

const Lipsticks = ()  => {
    const [showItems, setShowItems] = useState(false);
    return(
        <>
        <div className="lipstick">

            <div className="lipstick-products">
                <h2>Lipsticks</h2>
             <img src={lipstick} alt=""  className="lipstick-img"/>
            </div>

            <div>
                <h3>wondering a day without smooth lips</h3>
                <button onClick={() =>setShowItems(!showItems)}  className="toggle-button">

                    {showItems ? "HideItems" : "ShowItems"}
                </button>

                {
            showItems &&
            <div className ="row justify-content-center">
            {data.productionData.map((item,index)=>{
                return(
                    <ItemCard
                    title={item.titles}
                    desc= {item.desc}
                    price = {item.price}
                    item = {item}
                    key ={index}/>
                )
            })}
         </div>
                }
            </div>
        </div>
        </>
    )
}

export default Lipsticks;