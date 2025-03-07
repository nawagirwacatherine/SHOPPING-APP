import {useCart} from "react-use-cart";

const Itemcard = (props) => {

    const {addItem} = useCart();
    return(

        <>
        <div className="col-11 col-md-6 <c0l-lg-3, mx-0 mb-4">
            <div className="card-body">
                <h5 className="card-title"> {props.title}</h5>
                <p className="card-text">${props.price}</p>
                <p className="card-text">{props.desc}</p>
                <button className="btn btn-success" onClick = { ()=>addItem(props.item)}> Add to cart</button>
            </div>
        </div>

       

        </>
    )

   
}

export default Itemcard;