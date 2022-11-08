import React, {useState, useEffect} from 'react';
import {Link, Navigate, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function EditProduct(props) {
    let { id } = useParams();
  
    const [ProductInput, setProduct] = useState([]);
    const [errorInput, setError] = useState([]);
    const Navigate = useNavigate()
    useEffect(() => {
        // const id = props.match.params.id;
        axios.get(`/api/editProduct/${id}`).then( res => {
            setProduct(res.data);
            console.log(res.data)
            setLoading(false);
        });

    }, []);

    const handleInput = (e) => {
        e.persist();
        setProduct({...ProductInput, [e.target.name]: e.target.value });
    }

    const updateProduct = (e) => {
        e.preventDefault();
        
        // const id = props.match.params.id;
        // const data = studentInput;
        const data = {
            tensp:ProductInput.tensp,
            moTa:ProductInput.moTa,
            urlHinh:ProductInput.urlHinh,
            idLoai:ProductInput.idLoai,
            gia:ProductInput.gia,
        }

        axios.put(`/api/editProduct/${id}`, data).then(res=>{
                console.log(res);

                swal("Success",res.data.message,"success");
                setProduct([]);
                Navigate('/');
           
        });
    }

    
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit Product 
                                    <Link to={'/'} className="btn btn-danger btn-sm float-end"> BACK</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                
                                <form onSubmit={updateProduct} >
                                    <div className="form-group mb-3">
                                        <label>Name</label>
                                        <input type="text" name="tensp" onChange={handleInput} value={ProductInput.tensp} className="form-control" />
                                        <span className="text-danger">{errorInput.tensp}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Mô tả</label>
                                        <input type="text" name="moTa" onChange={handleInput} value={ProductInput.moTa}  className="form-control" />
                                        <span className="text-danger">{errorInput.moTa}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Loại</label>
                                        <input type="text" name="idLoai" onChange={handleInput} value={ProductInput.idLoai}  className="form-control" />
                                        <span className="text-danger">{errorInput.idLoai}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Hình</label>
                                        <input type="text" name="urlHinh" onChange={handleInput} value={ProductInput.urlHinh}  className="form-control" />
                                        <span className="text-danger">{errorInput.urlHinh}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Giá</label>
                                        <input type="text" name="gia" onChange={handleInput} value={ProductInput.gia}  className="form-control" />
                                        <span className="text-danger">{errorInput.gia}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" id="updatebtn" className="btn btn-primary">Update Product</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default EditProduct;