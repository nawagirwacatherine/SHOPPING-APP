import './naturals.css'
import {useState} from "react";
import natural from '../../images/natural.jpeg'
import data from '../../cart/data.jsx'
import ItemCard from '../../cart/Itemcard.jsx'


const Naturals = () =>{

    const [showItems, setShowItems] = useState(false);
    return (
     <div className="naturals">
        <div className="naturals-products">
 <h2>Naturals</h2>
            <img src={natural} alt="" className='naturals-img'/>
        </div>

        <div>
            <h3>Be you is the goal</h3>
            <button onClick={ () => setShowItems(!showItems)} className="toggle-button">
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

export default Naturals;