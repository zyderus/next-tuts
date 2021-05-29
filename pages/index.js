import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (<>
    <Head>
      <title>Ninja List | Home</title>
      <meta name='keywords' content='ninjas' />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit velit expedita unde odio quisquam mollitia nobis sunt officia corporis incidunt magnam vel sapiente, dolorem, eius delectus explicabo pariatur totam culpa.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum perferendis saepe mollitia nihil at quas suscipit. Ratione maxime vel cumque non voluptas temporibus recusandae exercitationem iusto minima! Nesciunt, ipsa hic!</p>
      <Link href='/ninjas'>
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  </>)
}
