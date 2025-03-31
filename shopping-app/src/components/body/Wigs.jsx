import "./wigs.css"
import {useState} from 'react';
import wig2 from "../../images/wig2.jpg"
import data from '../../cart/data.jsx'
import ItemCard from '../../cart/Itemcard.jsx'

const Wigs = () =>{
    const [showItems, setShowItems] = useState(false);
    return (
        <>
     <div className="wigs">
     <div className="wig-products"></div>
    <h2>Wigs</h2>
     <img src={wig2} alt="" className="wigimg" />
    

     <div> 
     <h3> Get a wig at an affordable price</h3>
     <button onClick={() =>setShowItems(!showItems)} className="toggle-button">
        {showItems ? "HideItems":"ShowItems"}
     </button>

     {showItems &&
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

export default Wigs;