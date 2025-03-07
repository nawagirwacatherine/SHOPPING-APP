import "./jerry.css"
import images1 from '../../images/images1.jpeg'

const Jerry = () => {
    return (
        <>
        <div className="jerry">
         <div className="jerryproduct"></div>

         <h2>Jerry</h2>
         <img src={images1} alt=""  className="jerryimg" />

        

        <div>
            <h3>We make your skin shine bright like diamond</h3>
        </div>

        </div>

        </>
    )
}

export default Jerry