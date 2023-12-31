import React, { useEffect, useState} from 'react'
import axios from 'axios';

function ProductForm(props) {
    const {products, setProducts} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
      e.preventDefault();
      axios.post('http://localhost:8000/api/product', {
        title,
        price,
        description
      })
        .then(res=>{
          console.log(res)
          console.log(res.data)
          setProducts([...products, res.data])
        })
        .catch(err=>console.log(err))
      setTitle("");
      setPrice("");
      setDescription("");
    }
    
    return (
      <form onSubmit={onSubmitHandler}>
        <h1>Product Manager</h1>
        <h2>Product Form</h2>
        <p>
          <label>Title</label><br/>
            <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} />
        </p>
        <p>
          <label>Price</label><br/>
            <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price} />
        </p>
        <p>
          <label>Description</label><br/>
            <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
        </p>
        <input type="submit" />
      </form>
    )
}

export default ProductForm

//make an api request & display message
// using the useEffect hook to make the API call immediately upon rendering and save the message in state