
import "./makeup.css"
import Lipsticks from "../components/bodydesign/Lipsticks.jsx"
import NailPolish from "../components/bodydesign/NailPolish.jsx"
import SkinPolish from "../components/bodydesign/SkinPolish.jsx"
import  Naturals from "../components/bodydesign/Naturals.jsx"



const Makeup = () => {
    return (
  <>
        <h1>Makeup deals</h1>
        <div className="makeup">
        <Lipsticks/>
        <NailPolish/>
        <SkinPolish/>
        <Naturals/>

        </div>
        </>
    )
}

export default Makeup;