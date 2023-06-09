import { Routes, Route, } from "react-router-dom";
import { useState } from 'react'
import OneProduct from './OneProduct';
import About from './About';
import Cart from './Cart';


const ProductList = () => {
    const [products, setProducts] = useState([]);

    const addToCart = (item) => {
        // console.log(item);
        //1.pasidarome duomenu kopija newCart
        const newCart = [...products]
        //2.gali reiketi lokalaus, laikino kintomojo
        //3.tikrinu per krepseli, ar tokia preke yra
        let productInCart = newCart.find(tempProduct =>
            item.name === tempProduct.name);
        // console.log(productInCart);
        //4. tikrinu per duomenis ar pakanka kiekio - countInStock
        //5 .jei nera, pridedu nauja preke

        //6. jei yra, padidinu prekes kieki krepselyje
        //7. jei nepakanka kiekio sandelyje, pranesu vartotojui, neleidziu prideti
        if (productInCart === undefined && item.countInStock > 0) {
            productInCart = {
                ...item,
                quantity: 1
            }
            newCart.push(productInCart)
        } else if (productInCart && productInCart.quantity < item.countInStock) {
            productInCart.quantity++
        } else {
            alert("Kiekis nepakankamas, mes susisieksime");
        }
        //8. uzsetinti nauja krepsiuka i state setProducts(newCart)
        setProducts(newCart);
    }

    const increaseQuantity = (item) => {
        //console.log(item, " increaseQuantity");
        const newCart = [...products]
        let productInCart = newCart.find(tempProduct =>
            item.name === tempProduct.name);
        if (productInCart && productInCart.quantity < item.countInStock) {
            productInCart.quantity++
        } else {
            alert("Kiekis nepakankamas, mes susisieksime");
        }
        setProducts(newCart);
    }

    const decreaseQuantity = (item) => {
        //console.log(item, "decreaseQuantity");
        const newCart = [...products]
        let productInCart = newCart.find(tempProduct =>
            item.name === tempProduct.name);
        if (productInCart && productInCart.quantity > 1) {
            productInCart.quantity--;
        } else {
            newCart.splice(productInCart, 1)
        }
        setProducts(newCart);
    }
    //console.log(products)
    return (
        <Routes>
            <Route path="/" element={<About />} />
            <Route path="/products" element={<OneProduct addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart products={products}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity} />} />
        </Routes>
    )
}

export default ProductList
