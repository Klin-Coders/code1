import Head from 'next/head'
import Chat from '../../components/Chat'
import Comment from '../../components/Comment'
import styles from '../styles/Home.module.css'
import { useData } from '../../context/DataContext'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
     {/* <Chat /> */}
     <Comment />
    </div>
  )
}

