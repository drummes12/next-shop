import React, { useState, useEffect, useContext, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Menu from '@components/Menu'
import MenuMobile from '@components/MenuMobile'
import MyOrder from '@containers/MyOrder'
import AppContext from '@context/AppContext'
import ProductDetail from '@containers/ProductDetail'

import menu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import shopping_cart from '@icons/icon_shopping_cart.svg'

import styles from '@styles/Header.module.scss'

const Header = () => {
  const [matches, setMatches] = useState(null)
  const [toggle, setToggle] = useState(false)
  const [toggleOrders, setToggleOrders] = useState(false)
  const [toggleMenuMobile, setToggleMenuMobile] = useState(false)
  const { state, removeProductInfo } = useContext(AppContext)
  const mediaMatchRef = useRef(null)
  const pathNameRef = useRef(null)

  useEffect(() => {
    mediaMatchRef.current = window.matchMedia('(min-width: 870px)')
    pathNameRef.current = window.location.pathname
    setMatches(mediaMatchRef.current.matches)
  }, [])

  useEffect(() => {
    const handler = (e) => setMatches(e.matches)
    if (!matches && toggle) setToggle(false)
    if (matches && toggleMenuMobile) setToggleMenuMobile(false)
    mediaMatchRef.current?.addListener(handler)
    return () => mediaMatchRef.current?.removeListener(handler)
  }, [matches, toggle, toggleMenuMobile])

  const handleToggle = () => {
    removeProductInfo()
    setToggleOrders(false)
    setToggle(!toggle)
  }

  const handleToggleOrders = () => {
    removeProductInfo()
    setToggle(false)
    setToggleMenuMobile(false)
    setToggleOrders(!toggleOrders)
  }

  const handleToggleMenuMobile = () => {
    removeProductInfo()
    setToggleOrders(false)
    setToggleMenuMobile(!toggleMenuMobile)
  }

  return (
    <nav className={styles.Nav}>
      <Image src={menu} alt='menu' className={styles.menu} onClick={handleToggleMenuMobile} />
      <div className={styles['navbar-left']}>
        <Link href='/'>
          <Image src={logo} alt='logo' className={styles['nav-logo']} />
        </Link>
        <ul>
          <li>
            <Link href='/'>All</Link>
          </li>
          <li>
            <Link href='/'>Clothes</Link>
          </li>
          <li>
            <Link href='/'>Electronics</Link>
          </li>
          <li>
            <Link href='/'>Furnitures</Link>
          </li>
          <li>
            <Link href='/'>Toys</Link>
          </li>
          <li>
            <Link href='/'>Others</Link>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']}>
            <Link href='javascript:void(0)' onClick={handleToggle}>
              test@example.com
            </Link>
          </li>
          <li className={styles['navbar-shopping-cart']}>
            <Link href='javascript:void(0)' onClick={handleToggleOrders}>
              <Image src={shopping_cart} alt='shopping cart' />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </Link>
          </li>
        </ul>
      </div>
      {toggle && matches && <Menu />}
      {toggleOrders && pathNameRef.current !== '/checkout' && (
        <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} />
      )}
      {toggleMenuMobile && !matches && <MenuMobile />}
      {state.productInfo && <ProductDetail />}
    </nav>
  )
}

export default Header
