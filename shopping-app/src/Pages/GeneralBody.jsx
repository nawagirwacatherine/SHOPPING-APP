import "./generalbody.css"
import SkinCare from "../components/body/SkinCare.jsx"
import  BodySplash from "../components/body/BodySplash.jsx"
import HairSpray from "../components/body/HairSpray.jsx"
import Lotion from "../components/body/Lotion.jsx"
import Wigs from "../components/body/Wigs.jsx"
import Jerry from "../components/body/Jerry.jsx"

const GeneralBody = () => {
    return(
     <>
      <h1>Body deals</h1>
      <div className="general-body">
< SkinCare /> 
 < BodySplash/>
 <HairSpray/>
 <Lotion/>
 <Wigs/>
 <Jerry/>

 </div>
     

      </>
    )
} 

export default GeneralBody;