import "./massage.css"
import massage from "../../images/massage.jpg"


const Massage = () =>{
    return (
     <div className="body-scrub">
      <h2>Body Massage</h2>

      <div className="bodyscrub-products">
        <img src={massage} alt="" className="bodyscrub-img"/>
      </div>

      <div>
        <h3>Relax every body cell</h3>
      </div>
     </div>
    )
}

export default Massage;