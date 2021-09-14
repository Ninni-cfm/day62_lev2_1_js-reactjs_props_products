import './Product.css'

const Product = (param) => {
    console.log(param);

    return (
        <div className="Product">
            <img src={param.product.image} alt={param.product.name} />
            <p>{param.product.name}</p>
            <p>{param.product.price}$</p>
            <button>BUY NOW</button>
        </div>
    );
}

export default Product;