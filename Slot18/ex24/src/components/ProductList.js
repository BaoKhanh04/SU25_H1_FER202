import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateCartItem, removeFromCart } from '../store/cartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    dispatch(updateCartItem({ id: productId, quantity: parseInt(quantity) || 0 }));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const getQuantityInCart = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Catalogs: {product.catalogs.join(', ')}</p>
            <div className="cart-actions">
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
              <div>
                <span>Qty: </span>
                <input 
                  type="number" 
                  min="0"
                  value={getQuantityInCart(product.id)}
                  onChange={(e) => handleUpdateQuantity(product.id, e.target.value)}
                  style={{ width: '50px' }}
                />
              </div>
              <button 
                onClick={() => handleRemoveFromCart(product.id)}
                disabled={!getQuantityInCart(product.id)}
              >
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
