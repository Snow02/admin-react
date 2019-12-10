import React from "react";
import {Switch, Route, Router} from "react-router-dom";
// Components
import AddUser from "./views/user/AddUser";
import Master from "./components/layout/Master";
import ListUser from "./views/user/ListUser";
import EditUser from "./views/user/EditUser";
import AddProduct from "./views/product/AddProduct";
import ListProduct from "./views/product/ListProduct";
import EditProduct from "./views/product/EditProduct";
import ListCategory from "./views/category/ListCategory";
import AddCategory from "./views/category/AddCategory";
import EditCategory from "./views/category/EditCategory";

import Login from "./views/user/Login";
import PrivateRoute from "./PrivateRoute";


const Routes = () => {


    return (
        <>
                <Switch>
                    <Route path="/admin/login" exact component={Login}/>
                    <PrivateRoute>
                        <Master>
                            {/*User*/}
                            <Route path="/admin/user/add" component={AddUser}/>
                            <Route path="/admin/user/index" component={ListUser}/>
                            <Route path="/admin/user/edit/:id" component={EditUser}/>
                            {/*Product*/}
                            <Route path="/admin/product/index" component={ListProduct}/>
                            <Route path="/admin/product/add" component={AddProduct}/>
                            <Route path="/admin/product/edit" component={EditProduct}/>
                            {/*Category*/}
                            <Route path="/admin/category/index" component={ListCategory}/>
                            <Route path="/admin/category/add" component={AddCategory}/>
                            <Route path="/admin/category/edit" component={EditCategory}/>

                        </Master>
                    </PrivateRoute>

                </Switch>
        </>
    );
};

export default Routes;
