import { useContext, useState } from 'react'
import AppContext from '@context/AppContext'

export const useGetInfoProduct = (product) => {
  const { price, title, description, images } = product

  const [error, setError] = useState(false)

  const { state, addToCart, removeFromCart, addProductInfo } = useContext(AppContext)

  const handleClick = (item) => {
    state.cart.find((c) => c === item) ? removeFromCart(item) : addToCart(item)
  }
  const handleRemove = (product) => {
    removeFromCart(product)
  }

  let imageSrc = `https://source.unsplash.com/random/600x600?sig=${Math.random()}`
  const validateUrl = /^(\/|http:\/\/|https:\/\/)/
  if (!imageSrc || !validateUrl.test(imageSrc))
    imageSrc =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'

  const handleError = () => setError(true)

  return {
    state,
    error,
    price,
    title,
    description,
    images,
    imageSrc,
    handleClick,
    handleRemove,
    addProductInfo,
    handleError,
  }
}
