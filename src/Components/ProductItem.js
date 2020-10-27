import React from "react";
import { useParams } from "react-router-dom";
import Shoes from "./Product.json"

export default function ProductItem() {
  const { id } = useParams();
  const Shoe = Shoes[id];
  if (!Shoe)
    return <h2> Item not Found</h2>
  return (
    <div>
      <h1>Welcome To Product Item</h1>
      <div className="link" >
        <h4>{Shoe.name}</h4>
        <img src={Shoe.img} height={300} alt={"Shoes IMG"} />
              </div>

    </div>
  );
}
