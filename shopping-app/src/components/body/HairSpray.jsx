import "./hair-spray.css"
import stock from "../../images/stock.jpg"

const HairSpray = () => {
    return(
        <div className="hair-spray">
            <div className="hair-product"></div>
            <h2>Hair Sprays</h2>
        <img src={stock} alt=""   className="stockimg" />

        <div>
            <h3>Smooth and strong texture</h3>
        </div>
        </div>
    )
}

export default HairSpray;