import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Catelogy() {

    const [catelogy, setCatelogy] = useState([]);

    useEffect(() => {
        fletchCatelogy()
    }, [])//
    const fletchCatelogy = () =>{
        axios.get(`http://localhost:8000/api/catelogy`).then(res =>{
            if(res.status === 200){
                setCatelogy(res.data.data)
                console.log(res.data);
                // return(res.data);
            }
        });
    }
    return(
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Catelogy Data
                                    <Link to={'addProduct'} className="btn btn-primary btn-sm float-end"> Add Product</Link>
                                </h4>
                            </div>
                            <div className="card-body">

                                <table className="table table-bordered ">
                                    <thead>
                                        <tr style={{ textAlign: 'center' }}>
                                            <th>ID</th>
                                            <th>Name</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody style={{ textAlign: 'center' }}>
                                        {catelogy.map((item,index)=>(
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <Link ><td>{item.tenLoai}</td></Link>
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