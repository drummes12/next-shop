import styles from '@styles/SendEmail.module.scss'
import Head from 'next/head'
import Image from 'next/image'

import email from '@icons/email.svg'
import logo from '@logos/logo_yard_sale.svg'
import Link from 'next/link'

const SendEmail = () => {
  return (
    <>
      <Head>
        <title>React Shop - Send Email</title>
      </Head>
      <div className={styles.SendEmail}>
        <div className={styles['form-container']}>
          <Image src={logo} alt='logo' className={styles.logo} />
          <h1 className={styles.title}>Email has been sent!</h1>
          <p className={styles.subtitle}>
            Please check your inbox for instructions on how to reset the password
          </p>
          <div className={styles['email-image']}>
            <Image src={email} alt='email' />
          </div>
          <button className={`${styles['primary-button']} ${styles['login-button']}`}>Login</button>
          <p className={styles.resend}>
            <span>Didn&apos;t receive the email? </span>
            <Link href='/'>Resend</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default SendEmail
