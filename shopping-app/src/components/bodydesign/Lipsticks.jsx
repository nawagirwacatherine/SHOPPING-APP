import "./lipstick.css"
import lipstick from "../../images/lipstick.webp"

const Lipsticks = ()  => {
    return(
        <>
        <div className="lipstick">

            <div className="lipstick-products">
                <h2>Lipsticks</h2>
             <img src={lipstick} alt=""  className="lipstick-img"/>
            </div>

            <div><h3>wondering a day without smooth lips</h3></div>
        </div>
        </>
    )
}

export default Lipsticks;