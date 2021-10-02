import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import { Link } from 'react-router-dom';

export default class Products extends Component {
    constructor(props){
        super(props);
        this.state={
            product:null,
        };
    }
    openModal =(product) =>{
        this.setState({product});
    };
    closeModal =()=>{
        this.setState({product:null});
    };

  render() {
    const { product } = this.state;
    return (
      <div>
          <Fade bottom cascade>
        <ul className="products">
          {this.props.products.map((product) => (
            <li key={product.id}>
              <div className="product">
                <a href={"#" + product.id} 
                onClick={()=>this.openModal(product)}>
                  <img src={product.image} alt={product.name}></img>
                  <p>{product.name}</p>
                </a>
              </div>
            </li>
          ))}
        </ul>
        </Fade>
        {product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="product-details">
                <img src={product.image} alt={product.name}></img>
                <div className="product-details-description">
                  <p>
                    <strong>{product.name}</strong>
                  </p>
                  <p>{product.type}</p>
                  <p>{product.detail}</p>
                  <Link to={`/update-product/${product.id}`}><button type="update">Update product</button></Link>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}