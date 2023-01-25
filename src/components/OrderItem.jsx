import React, { useState, useContext } from 'react'
import Image from 'next/image'
import AppContext from '@context/AppContext'

import close from '@icons/icon_close.png'
import styles from '@styles/OrderItem.module.scss'

const OrderItem = ({ product }) => {
  const { images, title, price } = product
  const { removeFromCart, addProductInfo } = useContext(AppContext)

  const [error, setError] = useState(false)

  let imageSrc = images[0]
  const validateUrl = /^(\/|http:\/\/|https:\/\/)/
  if (!imageSrc || !validateUrl.test(imageSrc))
    imageSrc =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'

  const handleError = () => setError(true)

  const handleRemove = (product) => {
    removeFromCart(product)
  }

  return (
    <div className={styles.OrderItem}>
      <figure>
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
      </figure>
      <p>{title}</p>
      <p>${price}</p>
      <Image src={close} alt='close' onClick={() => handleRemove(product)} />
    </div>
  )
}

export default OrderItem
