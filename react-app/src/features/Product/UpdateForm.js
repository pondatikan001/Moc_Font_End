import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { updateProduct, deleteProduct } from './actions';

export default function UpdateForm() {
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const product = products.find((product) => product.id === Number(id));

  const [name, setName] = useState(''); 
  const [image, setImage] = useState(''); 
  const [type, setType] = useState(''); 
  const [detail, setDetail] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();
  
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(updateProduct({ id: product.id, name, type, image,detail }));
    history.push('/');
  };

  const onDelete = () => {
    dispatch(deleteProduct({ id: product.id }));
    history.push('/');
  };


  return (
    <>
      <h1>Update Product</h1>
      <form id="create-form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            id="name" 
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className=" input-group">
          <label htmlFor="image">Image URL</label>
          <input
            name="image"
            type="text"
            id="image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>

        <div className=" input-group">
          <label htmlFor="type">Type</label>
          <input
            name="type"
            type="text"
            id="type"
            value={type}
            onChange={(event) => setType(event.target.value)}
          />
        </div>

        <div className=" input-group">
          <label htmlFor="detail">Detail</label>
          <input
            name="detail"
            type="text"
            id="detail"
            value={detail}
            onChange={(event) => setDetail(event.target.value)}
          />
        </div>

        <button
          type="button"
          className="UpdateForm__delete-button"
          onClick={onDelete}
        >
          Delete product
        </button>
        <button type="submit" onClick={onSubmit}>Update product</button>
      </form>
    </>
  );
}
