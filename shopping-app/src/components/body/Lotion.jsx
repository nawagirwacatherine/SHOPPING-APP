import "./lotion.css"
import lotion from"../../images/lotion.gif"

const Lotion = () =>{
    return (
        <div className="lotion">

        <div className="lotion-product"></div>
         <h2>Body lotions</h2>
        <img src={lotion} alt=""  className="lotionimg"/>

        <div>
        <h2> Soft and smooth Skin </h2>
        </div>
        
        </div>
    )
}

export default Lotion