import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res=>{
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err=>console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/product/${id}`, {
            title,
            price,
            description
        })
            .then(res=> {
                console.log(res.data);
                navigate(`/api/product/${id}`)
            })
            .catch(err=>console.log(err))
    }

    return (
    <div>
        <h1>Update a product</h1>
        <form onSubmit={updateProduct}>
            <p>
                <label>Title</label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label>
                <input 
                    type="number" 
                    value={price} 
                    onChange={(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>description</label>
                <textarea rows={4} cols={50}
                    type="text" 
                    value={description} 
                    onChange={(e)=>setDescription(e.target.value)}/>
            </p>
            <input type="submit" />
        </form>
    </div>
  )
}

export default UpdateProduct