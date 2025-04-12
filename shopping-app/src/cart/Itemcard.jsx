import {useCart} from "react-use-cart";

const Itemcard = (prop) => {

    const {addItem} = useCart();
    return(

        <>
        <div className="col-11 col-md-6 <c0l-lg-3, mx-0 mb-4">
            <div className="card-body">
                <h5 className="card-title"> {prop.title}</h5>
                <p className="card-text">{prop.price}$</p>
                <p className="card-text">{prop.desc}</p>
                <button className="btn btn-success" onClick = { ()=>addItem(prop.item)}> Add to cart</button>
            </div>
        </div>

       

        </>
    )

   
}

export default Itemcard;