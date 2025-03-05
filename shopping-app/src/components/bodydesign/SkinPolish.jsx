import "./skinpolish.css"

import skin3 from '../../images/skin3.jpg'

const SkinPolish = () => {
    return(
    <div className="skinpolish">

        <div className="skinpolish-product">
          <img src={skin3} alt=""  className="skin3img"/>
        </div>

        <h2>all day moisturized</h2>
    </div>
    )
}

export default SkinPolish;