import React, {useState} from 'react';
import {Link,Navigate, useNavigate  } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function AddProduct() {

    const [ProductInput, setProduct] = useState({
        tensp: '',
        moTa: '',
        idLoai: '',
        urlHinh:'',
        gia: '',
        error_list: [],
    });
    const Navigate = useNavigate()

    const handleInput = (e) => {
        e.persist();
        setProduct({...ProductInput, [e.target.name]: e.target.value })
    }

    const saveProduct = (e) => {
        e.preventDefault();
        
        const data = {
            tensp:ProductInput.tensp,
            moTa:ProductInput.moTa,
            urlHinh:ProductInput.urlHinh,
            idLoai:ProductInput.idLoai,
            gia:ProductInput.gia,
        }
        // console.log(data);
        axios.post(`http://localhost:8000/api/addProduct`, data).then(res => {
            console.log(res);
            if(res.data.status === true)
            {
                swal("Success!",res.data.message,"success");
                setProduct({
                    tensp: '',
                    moTa: '',
                    urlHinh:'',
                    idLoai: '',
                    gia: '',
                    error_list: [],
                });
                
            
            }
            else if(res.data.status === 422)
            {
                setProduct({...ProductInput, error_list: res.data.validate_err });
                // console.log('bb');
            }
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
                                <h4>Add Product 
                                    <Link to={'/'} className="btn btn-danger btn-sm float-end"> BACK</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                
                                <form onSubmit={saveProduct} >
                                    <div className="form-group mb-3">
                                        <label>Name</label>
                                        <input type="text" name="tensp" onChange={handleInput} value={ProductInput.name} className="form-control" />
                                        <span className="text-danger">{ProductInput.error_list.name}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Mô tả</label>
                                        <input type="text" name="moTa" onChange={handleInput} value={ProductInput.course}  className="form-control" />
                                        <span className="text-danger">{ProductInput.error_list.course}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Loại</label>
                                        <input type="text" name="idLoai" onChange={handleInput} value={ProductInput.email}  className="form-control" />
                                        <span className="text-danger">{ProductInput.error_list.email}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Hình</label>
                                        <input type="text" name="urlHinh" onChange={handleInput} value={ProductInput.email}  className="form-control" />
                                        <span className="text-danger">{ProductInput.error_list.email}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Giá</label>
                                        <input type="text" name="gia" onChange={handleInput} value={ProductInput.phone}  className="form-control" />
                                        <span className="text-danger">{ProductInput.error_list.phone}</span>
                                    </div>


                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Save Product</button>
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

export default AddProduct;