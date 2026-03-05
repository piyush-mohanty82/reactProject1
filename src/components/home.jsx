import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";
const Home = () => {
    const [products] = useContext(ProductContext);
    const {search} = useLocation();

    const category = decodeURIComponent(search.split("=")[1]);//decode url to normal string
    
    
    const [filteredproducts,setfilteredproducts] = useState(null);
    const getsproductcategory  = async () => {
        try {
            const {data} = await axios.get(`/products/category/${category}`) 
            setfilteredproducts(data);
        } catch(error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if(!filteredproducts || category == "undefined") setfilteredproducts(products);
        if(category != "undefined") getsproductcategory();
    },[category,products])
    
    return products ?  (
        <>
            <Nav />
            <div className='h-full w-[85%]  p-10 pt-[5%] flex flex-wrap  overflow-y-auto'>
                {filteredproducts && filteredproducts.map((p,i) => (
                    <Link key={i} to={`/details/${p.id}`} className='mr-3 mb-3 card p-3 border shadow w-[18%] h-[30vh] flex flex-col justify-center items-center'>
                    <div 
                        className='hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3'
                        style={{backgroundImage: `url(${p.image})`}}
                    ></div>
                    <h1 className='hover:text-blue-500'>{p.title}</h1>
                    </Link>
                ))}
            </div>
        </>
        
    ) : (
        <Loading />
    )
}
export default Home