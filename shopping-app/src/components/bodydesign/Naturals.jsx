import './naturals.css'
import natural from '../../images/natural.jpeg'


const Naturals = () =>{
    return (
     <div className="naturals">
        <div className="naturals-products">
 <h2>Naturals</h2>
            <img src={natural} alt="" className='naturals-img'/>
        </div>

        <div>
            <h2>Be you is the goal</h2>
        </div>
     </div>
    )
}

export default Naturals;