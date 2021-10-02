import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Navbar from './features/Navbar';
import Container from './features/Container';
import Home from './features/Home';
import AddForm from './features/Product/AddForm';
import UpdateForm from './features/Product/UpdateForm';
import { fetchProducts } from './features/Product/actions';

function App() {

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const products = await axios.get(
        'http://localhost:3000/api/items'
      );
      dispatch(fetchProducts(products.data));
    }

    getProducts();
  }, []);

  return (
    <>
      <Navbar/>
      <Container>
          <Switch>
            <Route path="/create-product">
              <AddForm />
            </Route>
            <Route path="/update-product/:id">
              <UpdateForm />
            </Route>
            <Route path="/">
              <Home  products={products}/>
            </Route>
          </Switch>
      </Container>
    </>
  );
}

export default App;