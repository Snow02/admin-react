import React, {Component} from 'react';

class EditProduct extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Product
                            <small>Edit</small>
                        </h1>
                    </div>
                    {/* /.col-lg-12 */}
                    <form  encType="multipart/form-data">
                        <div className="col-lg-7" style={{paddingBottom: '120px'}}>
                            <div className="form-group">
                                <label>Category Parent</label>
                                <select className="form-control" name="sltParent">
                                    <option value>Please Choose Category</option>
                                </select>

                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input className="form-control" name="name" placeholder="Please Enter Name Product"/>
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input className="form-control" name="price" placeholder="Please Enter Price "/>
                            </div>

                            <div className="form-group">
                                <label>Description</label>
                                <textarea className="ckeditor form-control" rows={3} name="desc"/>
                            </div>
                            <div className="form-group">
                                <label>Content</label>
                                <textarea className="ckeditor form-control" rows={3} name="content"/>
                            </div>

                            <div className="form-group">
                                <label>Images</label>
                                <input type="file" name="images"/>
                            </div>

                            <button type="submit" className="btn btn-default">Edit</button>
                            <button type="reset" className="btn btn-default">Reset</button>
                        </div>

                    </form>
                </div>

            </div>

        );
    }
}

export default EditProduct;