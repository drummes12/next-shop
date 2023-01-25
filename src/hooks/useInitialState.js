import { useState } from 'react'

const initialState = {
  cart: [],
}

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    })
  }

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    })
  }

  const addProductInfo = (payload) => {
    setState({
      ...state,
      productInfo: payload,
    })
  }

  const removeProductInfo = () => {
    setState({
      ...state,
      productInfo: null,
    })
  }

  return {
    state,
    addToCart,
    removeFromCart,
    addProductInfo,
    removeProductInfo,
  }
}

export default useInitialState
