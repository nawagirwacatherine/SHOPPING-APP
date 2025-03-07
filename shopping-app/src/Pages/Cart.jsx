import { useCart } from "react-use-cart";

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
    return(
        <>

        </>
    )
}

export default Cart;