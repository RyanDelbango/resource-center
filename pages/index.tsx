import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/Nav';
import MaterialCard from '../components/MaterialCard';

const Home = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Material Manager</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.cards}>
        <h1 className={styles.question}>
          Please take one.
        </h1>
        <MaterialCard material='Earth' />
        <MaterialCard material='Water' />
        <MaterialCard material='Wind' />
        <MaterialCard material='Fire' />
      </div>
    </div>
  )
}

export default Home;
