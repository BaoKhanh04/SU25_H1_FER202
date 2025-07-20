import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: '1',
      name: 'Laptop',
      price: 999.99,
      description: 'High-performance laptop',
      catalogs: ['electronics', 'computers']
    },
    {
      id: '2',
      name: 'Smartphone',
      price: 699.99,
      description: 'Latest smartphone model',
      catalogs: ['electronics', 'phones']
    },
    {
      id: '3',
      name: 'Headphones',
      price: 199.99,
      description: 'Noise-cancelling headphones',
      catalogs: ['electronics', 'audio']
    }
  ]
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
});

export default productsSlice.reducer;
