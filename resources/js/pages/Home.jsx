
import React from 'react'
import Navbar from './Navbar'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Swal from 'sweetalert2';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
    const [Product, setProduct] = useState([]);//Product [] đang là rỗng, thì mình xử lý ở dòng 23.
    // const [isOpen, setIsOpen] = useState(false);
    // const [searchValue, setSearchValue] = useState("");
    // khi state thay đổi, thì component re-render lại.
    // muốn thay đổi Product thì dùng setProduct.

    // async function search(key) {

    //     let result = await fetch("http://localhost:8000/api/search/" + key);
    //     result = await result.json();
    //     // console.log(result);

    //         setProduct(result)

    // }

    // const [time, setTime] = useState([]);

    // const inputChange = e => {
    //     const searchTerm = e.target.value

    //     clearTimeout(time)

    //     const getData = setTimeout(async () => {
    //         await axios
    //             .get(`http://localhost:8000/api/search/` + searchTerm)
    //             .then(({ data }) => {
    //                 setProduct(data.product)
    //                 console.log(data.product)
    //             });

    //     }, 500)
    //     setTime(getData)
    // }





    useEffect(() => {
        fetchProducts()
    }, []);

    const fetchProducts = async () => {
        await axios.get(`http://localhost:8000/api`).then(res => {
            if (res.status === 200) {
                // setProduct(res.data.product)
                console.log(res.data.product)
                // setLoading(false);
                setProduct(res.data.product)
            }
        });
    }

    const deleteProduct = async (id) => {
        const isConfirm = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            return result.isConfirmed
        });

        if (!isConfirm) {
            return;
        }

        await axios.delete(`http://localhost:8000/api/delete/${id}`).then(({ data }) => {
            Swal.fire({
                icon: "success",
                text: data.message
            })
            fetchProducts()
        }).catch(({ response: { data } }) => {
            Swal.fire({
                text: data.message,
                icon: "error"
            })
        })
    }





    //re-render chạy 1 lần nữa
    return (
        <div>
            <div className="pb-5">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <Link className="navbar-brand" to="/">Admin</Link>



                        <li className="search-btn">
                            <button
                                className="action"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <i className="bx bx-search"></i>
                            </button>
                            {isOpen && (
                                <div className="search-box">
                                    <div className="form">
                                        <input
                                            type="text"
                                            placeholder="Tìm kiếm..."
                                            value={searchValue}
                                            onChange={(e) => setSearchValue(e.target.value)}
                                        />
                                        <Link
                                            to={`http://localhost:8000/api/search?q=${searchValue}`}
                                            onClick={() => {
                                                setSearchValue("");
                                                setIsOpen(false);
                                            }}
                                        >0000
                                            <i className="bx bx-search"></i>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </li>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/addProduct">Add Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/catelogy">Catelogy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Product Data
                                    <Link to={'addProduct'} className="btn btn-primary btn-sm float-end"> Add Product</Link>
                                </h4>
                            </div>
                            <div className="card-body">

                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr style={{ textAlign: 'center' }}>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Mô tả</th>
                                            <th>Hình</th>
                                            <th>Loại</th>
                                            <th>Giá</th>
                                            <th>Edit</th>
                                            <th>Delete</th>

                                        </tr>
                                    </thead>
                                    <tbody style={{ textAlign: 'center' }}>
                                        {Product && Product.length > 0 && Product.map((item, index) =>
                                        (
                                            <tr key={index}>
                                                <td>{item.id}</td>

                                                <td><Link to={`detail/${item.id}`}>{item.tensp}</Link></td>
                                                <td>{item.moTa}</td>
                                                <td ><img src={item.urlHinh} style={{ width: 100, height: 100 }} alt="" /> </td>
                                                <td>{item['loai']['tenLoai']}</td>
                                                <td>{new Intl.NumberFormat().format(item.gia)}</td>
                                                <td>
                                                    <Link to={`editProduct/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                                                </td>
                                                <td>
                                                    <Link to="/"><button type="submit" onClick={() => deleteProduct(item.id)} className="btn btn-danger btn-sm">Delete</button></Link>

                                                </td>
                                            </tr>
                                        )
                                        )}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}
