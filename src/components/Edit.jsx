import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import {nanoid} from "nanoid"
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const [products,setproducts] = useContext(ProductContext);
    const navigate = useNavigate()
    const {id} = useParams();
    const [product,setproduct] = useState({
        title:"",
        description:"",
        image:"",
        price:"",
        category:""
    });
    
    const ChangeHandler = (e) => {
        // console.log(e.target.name,e.target.value);
        setproduct({...product,[e.target.name] : e.target.value})
    }
    
    useEffect(() => {
        setproduct(products.filter((p) => p.id == id)[0]);
    },[id])
    const AddProductHandler = (e) => {
        e.preventDefault();
        if(product.title.trim().length < 5 || product.image.trim().length < 5 || product.category.trim().length < 5 || product.price.trim().length < 1|| product.description.trim().length < 5){
            alert("Every input must have atleast 4 character")
            return
        }
        
        const pi = products.findIndex((p) => p.id == id);
        
        const copyData = [...products];
        copyData[pi] = {...products[pi],...product};
        console.log(copyData)
        setproducts(copyData)
        localStorage.setItem("products",JSON.stringify(copyData));
        navigate(-1);
    }
    
    return (
        <form onSubmit={AddProductHandler} className="p-[5%] bg-sky-400 items-center w-screen h-screen flex flex-col">
            <h1 className="mb-5 text-3xl w-1/2">Edit Product</h1>
            <input 
                type="url" 
                placeholder="image link" 
                className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3" 
                name="image"
                onChange={ChangeHandler}
                value={product && product.image}
            />
            <input 
                type="text" 
                placeholder="title" 
                className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3" 
                name="title"
                onChange={ChangeHandler}
                value={product && product.title}
            />
            <div className="w-1/2 flex justify-between">
                <input 
                    type="text" 
                    placeholder="category" 
                    className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3" 
                    name="category"
                onChange={ChangeHandler}
                    value={product && product.category}
                />
                <input 
                    type="number" 
                    placeholder="price" 
                    className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3" 
                    name="price"
                    onChange={ChangeHandler}
                    value={product.price}
                />
            </div>
            <textarea 
                placeholder="enter product description here"
                className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3" 
                rows="10"
                name="description"
                onChange={ChangeHandler}
                value={product && product.description}
            ></textarea>
            <div className="w-1/2 ">
                <button 
                    className='cursor-pointer py-2 px-5 border rounded border-blue-700 text-white bg-black' 
                >
                    Save Changes
                </button>

            </div>

        </form>
    )
}

export default Edit