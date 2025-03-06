import "./bodysplash.css"
import bodysplash from "../../images/bodysplash.jpg"

const BodySplash = () => {
    return (
     <div className="body-splash">
        <div className="body-product"></div>
       <h2>Body splash</h2>
        <img src={bodysplash} alt=""  className="splash"/>

        <div>
            <h2>Your body splash</h2>
        </div>
     </div>
    )
}

export default BodySplash ;