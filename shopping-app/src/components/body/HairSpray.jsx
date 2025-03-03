import "./hair-spray.css"
import stock from "../../images/stock.jpg"

const HairSpray = () => {
    return(
        <div className="hair-spray">
            <div className="hair-product"></div>
        <img src={stock} alt=""   className="stockimg" />

        <div>
            <h2>Smooth and strong texture</h2>
        </div>
        </div>
    )
}

export default HairSpray;