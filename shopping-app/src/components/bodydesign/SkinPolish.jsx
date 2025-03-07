import "./skinpolish.css"

import skin from '../../images/skin.webp'

const SkinPolish = () => {
    return(
    <div className="skinpolish">

        <div className="skinpolish-product">
           <h2>Skin polish</h2>
          <img src={skin} alt=""  className="skin3img"/>
        </div>

        <h3>all day moisturized</h3>
    </div>
    )
}

export default SkinPolish;