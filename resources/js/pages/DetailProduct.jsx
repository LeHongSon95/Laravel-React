import Navbar from "./Navbar";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DetailProduct (props){
    console.log(props);
    let { id } = useParams();
  
    const [Product, setProduct] = useState([]);

    useEffect(() => {
        axios.get(`/api/detail/${id}`).then( res => {
            if(res.status === 200){
            setProduct(res.data.product);
            console.log(res.data)
        }
        });

    }, []);
   
    return(
        <div>
            <p>{Product.tensp}</p>
            <p>{new Intl.NumberFormat().format(Product.gia)}</p>
            <p>{Product=>{loai['tenLoai']}}</p>
            
        </div>
    )
    
}