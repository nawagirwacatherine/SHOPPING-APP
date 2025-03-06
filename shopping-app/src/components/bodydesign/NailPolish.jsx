import "./nailpolish.css"
import nail from "../../images/nail.jpg"


const NailPolish = () => {
    return (
        <div className="nail-polish">
            <div className="nail-polishproducts">
                <h2>Nail polish</h2>
             <img src={nail} alt="" className="nail" />

            </div>

            <div>
                <h2>You want to paint the true beauty?</h2>
            </div>
        </div>
    )
}

export default NailPolish;