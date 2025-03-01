
import PropTypes from "prop-types";


const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {products.length > 0 ? (
                products.map((product) => (
                    <div key={product.id} className="product-card">
                        <h3>{product.name}</h3>
                        <p>Category: {product.category}</p>
                        <p>Price: ${product.price}</p>
                    </div>
                ))
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
};

export default ProductList;