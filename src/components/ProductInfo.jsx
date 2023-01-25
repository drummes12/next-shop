import addedToCartImage from '@icons/bt_added_to_cart.svg'
import addToCartImage from '@icons/bt_add_to_cart.svg'
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import AppContext from '@context/AppContext'

import styles from '@styles/ProductInfo.module.scss'

const ProductInfo = () => {
  const { state, addToCart, removeFromCart } = useContext(AppContext)

  const product = state.productInfo
  const { price, title, description, images } = product

  const handleClick = (item) => {
    state.cart.find((c) => c === item) ? removeFromCart(item) : addToCart(item)
  }

  const [error, setError] = useState(false)

  let imageSrc = images[0]
  const validateUrl = /^(\/|http:\/\/|https:\/\/)/
  if (!imageSrc || !validateUrl.test(imageSrc))
    imageSrc =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'

  const handleError = () => setError(true)

  return (
    <>
      {error ? (
        <Image
          placeholder='https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png'
          width={1000}
          height={1000}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'
          alt={title}
        />
      ) : (
        <Image
          placeholder='https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png'
          width={1000}
          height={1000}
          src={imageSrc}
          alt={title}
          onError={handleError}
        />
      )}
      <div className={styles.ProductInfo}>
        <p>${price}</p>
        <p>{title}</p>
        <p>{description}</p>
        <button
          className={`${styles['primary-button']} ${styles['add-to-cart-button']} ${
            state.cart.find((c) => c === product) ? styles.added : styles.add
          }`}
          onClick={() => handleClick(product)}
        >
          {state.cart.find((c) => c === product) ? (
            <Image src={addedToCartImage} alt='added to cart' />
          ) : (
            <Image src={addToCartImage} alt='add to cart' />
          )}
          Add to cart
        </button>
      </div>
    </>
  )
}

export default ProductInfo
