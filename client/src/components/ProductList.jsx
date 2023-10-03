import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function ProductList(props) {
    const {products, setProducts} = props;

    useEffect(()=>{ 
        axios.get('http://localhost:8000/api')
            .then(res=>{
                console.log(res.data)
                setProducts(res.data)
            })
            .catch(err=>console.log(err))
    }, [])

  return (
    <div>
        <h1>All Products:</h1>
        {
            products.map((product)=>{
                return <div key={product._id}>
                    <Link to={`/api/product/${product._id}`}><h3>{product.title}</h3></Link>
                    <ul>
                        <li>{product.price}</li>
                        <li>{product.description}</li>
                    </ul>
                </div>
            })
        }
    </div>
  )
}

export default ProductList