import Image from 'next/image'
import { useGetInfoProduct } from '@hooks/useGetInfoProduct'

import close from '@icons/icon_close.png'
import styles from '@styles/OrderItem.module.scss'

const OrderItem = ({ product }) => {
  const { error, price, title, imageSrc, addProductInfo, handleError, handleRemove } =
    useGetInfoProduct(product)

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
