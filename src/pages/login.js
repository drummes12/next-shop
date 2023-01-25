import Head from 'next/head'
import Link from 'next/link'
import { useRef } from 'react'
import Image from 'next/image'
import styles from '@styles/Login.module.scss'
import logo from '@logos/logo_yard_sale.svg'

const Login = () => {
  const form = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(form.current)
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    }
    console.debug('🚀 ~ file: Login.jsx ~ line 15 ~ handleSubmit ~ data', data)
  }

  return (
    <>
      <Head>
        <title>React Shop - Log in</title>
      </Head>
      <div className={styles.Login}>
        <div className={styles['Login-container']}>
          <Image src={logo} alt='logo' className={styles.logo} />
          <form action='/' className={styles.form} ref={form}>
            <label htmlFor='email' className={styles.label}>
              Email address
            </label>
            <input
              type='text'
              name='email'
              placeholder='test@example.com'
              className={`${styles.input} ${styles['input-email']}`}
            />
            <label htmlFor='password' className={styles.label}>
              Password
            </label>
            <input
              type='password'
              name='password'
              placeholder='*********'
              className={`${styles.input} ${styles['input-password']}`}
            />
            <button
              type='submit'
              className={`${styles['primary-button']} ${styles['login-button']}`}
              onClick={handleSubmit}
            >
              Log In
            </button>
            <Link href='/'>Forgot my password</Link>
          </form>
          <button className={`${styles['secondary-button']} ${styles['signup-button']}`}>
            Sign up
          </button>
        </div>
      </div>
    </>
  )
}

export default Login
