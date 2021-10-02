import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import { addProduct } from './actions';


function AddForm() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [type, setType] = useState('');
  const [detail, setDetail] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(addProduct({ name, type, image,detail }));
    history.push('/');
  }
  return (
    <>
      <h1>Add Product</h1>
      <form id="create-form" onSubmit={onSubmit}>
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

        <button type="submit">Add product</button>
      </form>
    </>
  );
}

export default AddForm;
