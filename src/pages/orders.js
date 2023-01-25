import Head from 'next/head'
import { useContext } from 'react'
import OrderItem from '@components/OrderItem'
import styles from '@styles/Orders.module.scss'
import AppContext from '@context/AppContext'

const Orders = () => {
  const { state } = useContext(AppContext)

  return (
    <>
      <Head>
        <title>React Shop - Orders</title>
      </Head>
      <div className={styles.Orders}>
        <div className={styles['Orders-container']}>
          <h1 className={styles.title}>My orders</h1>
          <div className={styles['Orders-content']}>
            <div className={styles['my-order-items']}>
              {state.cart.map((product, index) => (
                <OrderItem product={product} key={`orderItem-${product.id}-${index}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Orders
