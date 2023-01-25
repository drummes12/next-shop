import AppContext from '@context/AppContext'
import addedToCartImage from '@icons/bt_added_to_cart.svg'
import addToCartImage from '@icons/bt_add_to_cart.svg'
import styles from '@styles/ProductItem.module.scss'
import React, { useState, useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProductItem = ({ product }) => {
  const { images, price, title } = product

  const { state, addToCart, removeFromCart, addProductInfo } = useContext(AppContext)

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
    <div className={styles.ProductItem}>
      {error ? (
        <Image
          placeholder='https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png'
          width={1000}
          height={1000}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'
          alt={title}
          onClick={() => addProductInfo(product)}
        />
      ) : (
        <Image
          placeholder='https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png'
          width={1000}
          height={1000}
          src={imageSrc}
          alt={title}
          onClick={() => addProductInfo(product)}
          onError={handleError}
        />
      )}
      <div className={styles['product-info']}>
        <div>
          <p>${price}</p>
          <p>{title}</p>
        </div>
        <figure>
          <Link href='javascript:void(0)' onClick={() => handleClick(product)}>
            {state.cart.find((c) => c.id === product.id) ? (
              <Image src={addedToCartImage} alt='added to cart' />
            ) : (
              <Image src={addToCartImage} alt='add to cart' />
            )}
          </Link>
        </figure>
      </div>
    </div>
  )
}

export default ProductItem
