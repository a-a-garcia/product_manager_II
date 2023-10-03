import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';


function ProductList(props) {
    const {removeFromDom, products, setProducts} = props;
    const {id} = useParams();

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                removeFromDom(id)
            })
            .catch(err => console.log(err))
    }

    useEffect(()=>{ 
        axios.get('http://localhost:8000/api')
            .then(res=>{
                console.log(res.data)
                setProducts([...res.data]) // <-- add spread operator here
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
                    <button onClick={(e) => {deleteProduct(product._id)}}>delete</button><br></br>
                    <Link to={`/api/product/${product._id}/edit`}>Edit</Link><hr></hr>
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