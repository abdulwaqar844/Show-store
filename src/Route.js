import React from "react";
import { Routes,  Route } from "react-router-dom";
import Home from "./Components/Home"
import About from "./Components/About"
import Product from "./Components/Product"
import ProductItem from "./Components/ProductItem"
import NavMenu from "./Components/NavMenu"

export default function RouteConfig() {
    return (
        <div>
              <NavMenu />

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route exact path="/product" element={<Product />} />
                <Route path="/product/:id" element={<ProductItem />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </div>
    );
}

