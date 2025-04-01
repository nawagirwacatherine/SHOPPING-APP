import "./jerry.css"
import {useState} from 'react';
import images1 from '../../images/images1.jpeg'
import data from '../../cart/data.jsx'
import ItemCard from '../../cart/Itemcard.jsx'

const Jerry = () => {
    const [showItems, setShowItems] = useState(false);
    return (
        <>
        <div className="jerry">
         <div className="jerryproduct"></div>

         <h2>Jerry</h2>
         <img src={images1} alt=""  className="jerryimg" />

        

        <div>
            <h3>We make your skin shine </h3>
            <button onClick={()=> setShowItems(!showItems)} className="toggle-button">
                {showItems ? "HideItems" :"showItems"}
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

        </>
    )
}

export default Jerry