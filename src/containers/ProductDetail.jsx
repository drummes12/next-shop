import React, { useContext } from 'react'
import Image from 'next/image'
import ProductInfo from '@components/ProductInfo'
import styles from '@styles/ProductDetail.module.scss'
import AppContext from '@context/AppContext'

import close from '@icons/icon_close.png'
import Link from 'next/link'

const ProductDetail = ({ product }) => {
  const { removeProductInfo } = useContext(AppContext)

  return (
    <aside className={styles.ProductDetail}>
      <div className={styles['ProductDetail-close']}>
        <Link href='javascript:void(0)' onClick={() => removeProductInfo()}>
          <Image src={close} alt='close' />
        </Link>
      </div>
      <ProductInfo product={product} />
    </aside>
  )
}

export default ProductDetail
