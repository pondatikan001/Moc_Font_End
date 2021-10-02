import React from "react";
import data from "../Data/data.json";
import Products from "./Product/index";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';


function Home({ className }) {

  const products = useSelector((products) => data.products);

    return (
      <div className="grid-container">
        <main>
          <div className="content">
            <div className="main">
              <Products
                products={products}
              ></Products>
            </div>
          </div>
        </main>
      </div>
    );
  }


Home.propTypes = {
  className: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired
};

export default Home; 

