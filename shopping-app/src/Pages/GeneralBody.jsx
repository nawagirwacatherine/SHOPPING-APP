import "./generalbody.css"
import SkinCare from "../components/body/SkinCare.jsx"
import  BodySplash from "../components/body/BodySplash.jsx"
import HairSpray from "../components/body/HairSpray.jsx"
import Lotion from "../components/body/Lotion.jsx"
import Wigs from "../components/body/Wigs.jsx"
import Jerry from "../components/body/Jerry.jsx"

const GeneralBody = () => {
    return(
      <div className="general-body">

        <h1>Products in live</h1>

        <div className="generalbody-container">

< SkinCare /> 
 < BodySplash/>
 <HairSpray/>
 <Lotion/>
 <Wigs/>
 <Jerry/>

 </div>
      </div>
    )
} 

export default GeneralBody;