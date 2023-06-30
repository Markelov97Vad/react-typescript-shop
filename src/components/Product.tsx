import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct
}

function Product({product} : ProductProps) {
  // console.log(product);
  const [details, setDetais] = useState(false)

  const buttonColor = details ? 'bg-yellow-400' : 'bg-blue-400';

  const handleOption = () => {
    setDetais(!details)
  }
  
  return ( 
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      {/* {product.title} */}
      <img src={product.image} className="w-1/6" alt={product.title} />
      <p>{ product.title }</p>
      <span className="font-bold">{product.price}</span>
      <button className={`py-2 px-4 border ${buttonColor}`} onClick={handleOption}>
        {!details ? 'Show details' : 'Hide details'}
        </button>
       {details && <p>{product.description}</p>}
    </div> 
  );
}

export default Product;