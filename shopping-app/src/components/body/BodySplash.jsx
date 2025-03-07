import "./bodysplash.css"
import ItemCard from '../../cart/Itemcard.jsx'
import data from '../../cart/data.jsx'
import bodysplash from "../../images/bodysplash.jpg"

const BodySplash = () => {
    return (
     <div className="body-splash">
        <div className="body-product"></div>
       <h2>Body splash</h2>
        <img src={bodysplash} alt=""  className="splash"/>

        <div >
            <h3>Your body splash</h3>
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
        </div>
     </div>
    );
};

export default BodySplash ;