import React from "react"
import Shoes from "./Product.json"
import { Link } from "react-router-dom"

export default function Product() {

  return (
    <div>
      <h1>Product List</h1>
      <div className="productContainer">{Object.keys(Shoes).map(keyName => {
        const Shoe = Shoes[keyName];
        return (
          <Link key={keyName}
            className="link"
          
            to= {`/product/${keyName}`} >
            <h4>{Shoe.name}</h4>
            <img src={Shoe.img} height={100} alt={"Shoes IMG"} />
<h4>{Shoe.price}</h4>
          </Link>

        );
      })}</div>
    </div>
  );
}
