import React, { useContext } from 'react'
import Image from 'next/image'
import OrderItem from '@components/OrderItem'
import AppContext from '@context/AppContext'
import { getSumTotal } from '../utils'
import Link from 'next/link'

import flechita from '@icons/flechita.svg'
import styles from '@styles/MyOrder.module.scss'

const MyOrder = ({ toggleOrders, setToggleOrders }) => {
  const { state } = useContext(AppContext)

  return (
    <aside className={styles.MyOrder}>
      <div className={styles['title-container']}>
        <Image src={flechita} alt='arrow' onClick={() => setToggleOrders(!toggleOrders)} />
        <p className={styles.title}>My order</p>
      </div>
      <div className={styles['my-order-content']}>
        <div className={styles['my-order-items']}>
          {state.cart.map((product, index) => (
            <OrderItem product={product} key={`orderItem-${product.id}-${index}`} />
          ))}
        </div>
        <div className={styles.order}>
          <p>
            <span>Total</span>
          </p>
          <p>${getSumTotal()}</p>
        </div>
        <Link href='/checkout'>
          <button
            disabled={state.cart.length > 0 ? false : true}
            className={styles['primary-button']}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  )
}

export default MyOrder
