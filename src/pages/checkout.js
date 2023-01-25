import Head from 'next/head'
import OrderItem from '@components/OrderItem'
import AppContext from '@context/AppContext'
import styles from '@styles/Checkout.module.scss'
import { useContext } from 'react'
import { getCurrentDate, getSumTotal } from '../utils'

const Checkout = () => {
  const { state } = useContext(AppContext)

  return (
    <>
      <Head>
        <title>React Shop - Checkout</title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles['Checkout-container']}>
          <h1 className={styles.title}>My order</h1>
          <div className={styles['Checkout-content']}>
            <div className={styles.order}>
              <p>
                <span>{getCurrentDate()}</span>
                <span>{state?.cart.length} articles</span>
              </p>
              <p>${getSumTotal()}</p>
            </div>
          </div>
          <div className={styles['my-order-items']}>
            {state?.cart.map((product, index) => (
              <OrderItem product={product} key={`orderItem-${product.id}-${index}`} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout
