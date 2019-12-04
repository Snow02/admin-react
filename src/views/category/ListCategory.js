import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ListCategory extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Category
                            <small>List</small>
                        </h1>
                    </div>
                    <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                        <thead>
                            <tr className="center">
                                <th>STT</th>
                                <th>Name</th>
                                <th>Category Parent</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd gradeX center">
                                <td>1</td>
                                <td>Sport</td>
                                <td>None</td>
                                <td>Delete</td>
                                <td>
                                    <Link to="/admin/category/edit/:id">Edit</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>


        );
    }
}

export default ListCategory;