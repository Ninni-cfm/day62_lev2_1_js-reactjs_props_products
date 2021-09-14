import './ProductList.css'

import Product from "./Product";

const products = [
    { name: 'Cocooil', price: 30, image: '/img/cocooil.png' },
    { name: 'Polaroid', price: 60, image: '/img/polaroid.png' },
    { name: 'Maui Moisture', price: 20, image: '/img/maui-moisture.png' }
];


const ProductList = () => {
    return (
        <div className="ProductList">
            <Product product={products[0]} />
            <Product product={products[1]} />
            <Product product={products[2]} />
        </div>
    );
}

export default ProductList;