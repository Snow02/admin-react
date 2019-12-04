import React, {Component} from 'react';

class AddCategory extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Category
                            <small>Add</small>
                        </h1>
                    </div>
                    {/* /.col-lg-12 */}
                    <div className="col-lg-7" style={{paddingBottom: '120px'}}>
                        <form>
                            <div className="form-group">
                                <label>Category Parent</label>
                                <select className="form-control" name="sltParent">
                                    <option value={0}>Please Choose Category</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Category Name</label>
                                <input className="form-control" name="name" placeholder="Please Enter Category Name" />

                            </div>
                            <button type="submit" className="btn btn-default">Category Add</button>
                            <button type="reset" className="btn btn-default">Reset</button>
                        </form>
                    </div>
                </div>

            </div>


        );
    }
}

export default AddCategory;