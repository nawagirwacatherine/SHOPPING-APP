import { useCart } from "react-use-cart";
import Itemcard from "../cart/Itemcard";

const Cart = () => {
    
    const{
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,

    } = useCart();
    if (isEmpty) return <h className="text-center">Your Cart is Empty</h>
    return(
        <section className="py-4 container">

             <div className="row justify-content-center">
                <div className="col-12">
                    <h5> Cart({totalUniqueItems})total Items:({totalItems})</h5>

                    <table className="table table-light table-hover m-0">
                        {items.map((item,index)=>{
                            return(
                            <tr key={index}>
                                <td>
                                    {item.title}
                                </td>

                                <td>{item.price}</td>
                                <td>Quantity ({item.quantity})</td>

                                <td>
                                    <button 
                                    className="btn btn-info ms-2"
                                    onClick={() => updateItemQuantity(item.id, item.quantity -1)}
                                    >-</button>
                                    <button className="btn btn-info ms-2"
                                    onClick={() => updateItemQuantity(item.id,item.quantity +1)}
                                    >+</button>

                                    <button
                                    className="btn btn-danger ms-2"
                                    onClick ={() => removeItem(item.id)}
                                    >Remove Item</button>
                                </td>

                            </tr>
                            
                            )
                        })}
                    </table>
                </div>

                <div className="col-auto ms-auto">
                    <h2>Total Price:${cartTotal}</h2>
                </div>

                <div className="col-auto">
                    <button className="btn btn-danger m-2"
                    onClick={() => emptyCart()}
                    >Clear Cart </button>

                    <button className="btn btn-primary"> Buy Now</button>
                </div>
            
        </div>
        </section>
       
    )
}

export default Cart;