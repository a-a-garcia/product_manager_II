import React, {useState} from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

function Main() {
    const [products, setProducts] = useState([]);
    
  return (
    <div>
        <ProductForm products={products} setProducts={setProducts}/>
        <hr/>
        <ProductList products={products} setProducts={setProducts}/>
    </div>
  )
}

export default Main