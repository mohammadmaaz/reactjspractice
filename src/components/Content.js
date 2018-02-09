import React, {Component} from 'react';
import axios from 'axios';

export default class Content extends Component {
    constructor(){
      // Must be defined in constructor
      super();
      // State defined
      this.state = {
        productlist:[],
      };
      // Binding getAllProduct function with
      this.getAllProduct = this.getAllProduct.bind(this);
    }
    // give all product
    getAllProduct(){
      axios.get('http://localhost:8080/viewprod').then(
        (response)=>{
          //console.log(response.data.data);
          this.productlist = response.data.data;
          console.log(this.productlist[0]);
        }
      ).catch(
        function (error){ console.log(error);}
      )
    }
    // mounting the components func
    componentWillMount(){
      this.getAllProduct();
    }
    render(){
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Dashboard</h3>
                                </div>
                                <div className="box-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                          <p>Product List</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
