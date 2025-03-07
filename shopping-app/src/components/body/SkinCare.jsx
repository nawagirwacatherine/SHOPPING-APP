import "./skincare.css"
import  skin1 from "../../images/skin1.jpg";

const SkinCare = () =>{
    return(
        <div className="skin-care">
        <div className="skincare-products"></div>
            <h2>Skin Care</h2>
         <img src={skin1} alt=""  className="skin1"/>
         
       

        <div  className="skincare-products">
            <h3>Skin Care products</h3> 
        </div>

        </div>
    )
}

export default SkinCare;