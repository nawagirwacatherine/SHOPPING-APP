import "./jerry.css"
import {useState} from 'react';
import jerry1 from '../../images/jerry1.jpeg'
import Jerrydata from '../../cart/Jerrydata.jsx'
import ItemCard from '../../cart/Itemcard.jsx'

const Jerry = () => {
    const [showItems, setShowItems] = useState(false);
    return (
        <>
        <div className="jerry">
         <div className="jerryproduct"></div>

         <h2>Jerry</h2>
         <img src={jerry1} alt=""  className="jerryimg" />

        

        <div>
            <h3>We make your skin shine </h3>
            <button onClick={()=> setShowItems(!showItems)} className="toggle-button">
                {showItems ? "HideItems" :"showItems"}
            </button>

            { showItems && (
           <div className="row justify-content-center">
            {Jerrydata.productionData.map((item,index) =>{
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

        </>
    )
}

export default Jerry