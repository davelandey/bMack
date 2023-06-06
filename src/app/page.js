import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import lobster from 'src/app/lobster - icon (<a href="https-::www.flaticon.com:free-icons:lobster" title="lobster icons">Lobster icons created by Freepik - Flaticon<:a>).png'

// TODO: firebase app initialization (https://firebase.google.com/docs/web/setup#add-sdk-and-initialize)

export default function Home() {
  return (
    <div>
      <h1 className={styles.main}>Welcome to bMack</h1>
      <Image
      src={lobster}
      alt="Lobster logo"
      width={500}
      height={500}
      ></Image>
      <Link href="/contents/"><button>Contents</button></Link>

      </div>
  )
}
