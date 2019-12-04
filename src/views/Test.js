import React, {Component} from 'react';

class Test extends Component {

    showProduct(product){
        if(product.status){
            return  <div className="alert alert-primary" role="alert">
                <li>id : {product.id}</li>
                <li>name : {product.name}</li>
                <li>price : {product.price}</li>
                <li>status : {product.status ? "active" : "pending"}</li>
            </div>
        }

        else{
            return <p> Product pending activation   </p>
        }
    }
    render() {
        var a = 0;
        var product = {
            id : 4,
            name : 'Ip10',
            price: 123891237123,
            status : false,
        };
        var users = [
            {
                id : 1,
                name  : "LOL",
                phone : '902384902',
            },
            {
                id : 2,
                name  : "CMN",
                phone : '902384902',
            },
            {
                id : 3,
                name  : "VL",
                phone : '902384902',
            }
        ];
        var elements = users.map((user, index) => {
           return <div key={user.id}>
               <ul>
                   <li>{index}</li>
                   <li>{user.name}</li>
                   <li>{user.phone}</li>
               </ul>
           </div>
        });
        return (
            <div>
                <div className="alert alert-warning " role="alert">
                    This is a light alert—check it out!
                </div>
                <div className="alert alert-dark" role="alert">
                    This is a dark alert—check it out!
                </div>
                <div className="alert alert-primary" role="alert">
                    This is a primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click
                    if you like.
                </div>
                <div className="alert alert-primary" role="alert">
                    {this.showProduct(product)}
                </div>
                <div className="alert alert-primary" role="alert">
                    {elements}
                </div>
            </div>
        );
    }
}

export default Test;
