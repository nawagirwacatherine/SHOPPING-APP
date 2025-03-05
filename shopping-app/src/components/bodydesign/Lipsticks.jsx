import "./lipstick.css"
import lipstick from "../../images/lipstick.webp"

const Lipsticks = ()  => {
    return(
        <>
        <div className="lipstick">

            <div className="lipstick-products">
             <img src={lipstick} alt=""  className="lipstick-img"/>
            </div>

            <div><h2>wondering a day without smooth lips</h2></div>
        </div>
        </>
    )
}

export default Lipsticks;