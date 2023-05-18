'use client'
import React, { useState } from 'react';

const ProductOption = ({ product }) => {
  return (
    <option value={product.id}>{product.id} - {product.name}</option>
  );
};

const ProductSelect = () => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(-1);
  const [products] = useState([
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' }
  ]);
  const handleSelectChange = (event) => {
    const index = event.target.value;
    setSelectedProductIndex(index);
  };

  return (
    <div>
      <h1>Product List</h1>
      <label htmlFor="product-select">Select a product:</label>
      <select id="product-select" onChange={handleSelectChange}>
        <option value="-1">Select a product</option>
        {products.map((product) => (
          <ProductOption key={product.id} product={product} />
        ))}
      </select>
      {selectedProductIndex !== -1 && (
        <p>You selected: {products[selectedProductIndex].id} - {products[selectedProductIndex].name}</p>
      )}
    </div>
  );
};

export default ProductSelect;
