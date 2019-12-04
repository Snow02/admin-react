import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ListProduct extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Product
                            <small>List</small>
                        </h1>
                    </div>
                    <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                        <thead>
                        <tr align="center">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Created at</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                        </thead>
                        <tbody>

                        <tr className="odd gradeX" align="center">
                            <td>1</td>
                            <td>LOL</td>
                            <td>123</td>
                            <td>LOL</td>
                            <td>22/12/1023</td>
                            <td>22/12/1023</td>
                            <td>Delete</td>
                            <td>
                                <Link to="/admin/product/edit">Edit</Link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListProduct;