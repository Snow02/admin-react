import React from "react";
import {Route, Redirect,} from "react-router-dom";

function PrivateRoute  ({children, ...rest})   {

    const fakeAuth = {
        isAuthenticated: true,
        authenticate(cb) {
            fakeAuth.isAuthenticated = true;
            setTimeout(cb, 100); // fake async
        },
        signOut(cb) {
            fakeAuth.isAuthenticated = false;
            setTimeout(cb, 100);
        }
    };
    return (
        <Route
            {...rest}
            render={() =>
                fakeAuth.isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/admin/login",
                        }}
                    />
                )
            }
        />
    );
}
export default PrivateRoute;
