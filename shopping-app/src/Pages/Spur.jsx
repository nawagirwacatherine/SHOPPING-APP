
import "./spur.css"
import BodyScrub from "../components/spur-products/BodyScrub.jsx"
import Massage from "../components/spur-products/Massage.jsx"
import MicroBladding from "../components/spur-products/MicroBladding.jsx"

const Spur = () => {
    return(
        <>
  <h2>Spur</h2>

  <div className="spur">
  < BodyScrub/>
  < Massage/>
 < MicroBladding/>
  
  </div>

  </>
    )
}

export default Spur;