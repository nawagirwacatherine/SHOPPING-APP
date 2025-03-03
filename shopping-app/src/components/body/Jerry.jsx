import "./jerry.css"
import images1 from '../../images/images1.jpeg'

const Jerry = () => {
    return (
        <>
        <div className="jerry">
         <div className="jerryproduct"></div>

         <img src={images1} alt=""  className="jerryimg" />

        </div>

        <div>
            <h2>We make your skin shine bright like diamond</h2>
        </div>

        </>
    )
}

export default Jerry