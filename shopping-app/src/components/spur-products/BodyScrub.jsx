import "./bodyscrub.css"
import bodyscrub from "../../images/bodyscrub.jpg"


const BodyScrub = () =>{
    return (
     <div className="body-scrub">
      <h2>Body Scrub</h2>

      <div className="bodyscrub-products">
        <img src={bodyscrub} alt="" className="bodyscrub-img"/>
      </div>

      <div>
        <h3>Smooth Skin texture</h3>
      </div>
     </div>
    )
}

export default BodyScrub;