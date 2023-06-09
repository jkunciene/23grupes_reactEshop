import { Routes, Route, } from "react-router-dom";

import OneProduct from './OneProduct';
import About from './About';
import Cart from './Cart';


const ProductList = () => {
    return (
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/products" element={<OneProduct />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
    )
}

export default ProductList
