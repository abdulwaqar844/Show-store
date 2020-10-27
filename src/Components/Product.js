import React from "react"
import Shoes from "./Product.json"

export default function Product() {

  return (
<div>
  <h1>Product List</h1>
  <div className="productContainer">{Object.keys(Shoes).map(keyName=>{
    const Shoe =Shoes[keyName];
    return(
    <div key={keyName}>
      <h4>{Shoe.name}</h4>
    <img src={Shoe.img} height={100} alt={"Shoes IMG"} />
    </div>

    );
  })}</div>
</div>
  );
}
