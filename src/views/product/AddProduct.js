import React, {Component} from 'react';

class AddProduct extends Component {
    state = {
        name: '',
        price: '',
        desc : '',
        content: '',

    };
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    render() {
        console.log(this.state)
        return (
            <div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="page-header">Product
                                    <small>Add</small>
                                </h1>
                            </div>
                            {/* /.col-lg-12 */}
                            <form action="" method="POST" encType="multipart/form-data">
                                <div className="col-lg-7" style={{paddingBottom: '120px'}}>

                                    <div className="form-group">
                                        <label>Category Parent</label>
                                        <select className="form-control" name="sltParent">
                                            <option value>Please Choose Category</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input className="form-control" name="name" onChange={this.onChange} placeholder="Please enter name product" />
                                    </div>
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input className="form-control" name="price" onChange={this.onChange} placeholder="Please enter price product" />

                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea className=" ckeditor form-control" rows={3} name="desc" onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Content</label>
                                        <textarea className=" ckeditor form-control" rows={3} name="content" onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Images</label>
                                        <input type="file" name="images" />

                                    </div>

                                    <button type="submit" className="btn btn-default">Add</button>
                                    <button type="reset" className="btn btn-default">Reset</button>
                                </div>

                            </form>
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}

                {/* /#page-wrapper */}
                {/* /#wrapper */}

            </div>

        );
    }
}

export default AddProduct;