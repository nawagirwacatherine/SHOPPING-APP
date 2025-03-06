import "./bodyscrub.css"
import bodyscrub from "../../images/bodyscrub.jpg"


const BodyScrub = () =>{
    return (
     <div className="body-scrub">
      <h2>Body Scrub</h2>

      <div className="bodyscrub-products">
        <img src={bodyscrub} alt="" />
      </div>
     </div>
    )
}

export default BodyScrub;