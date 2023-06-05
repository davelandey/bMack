import styles from '../page.module.css'
import Link from 'next/link';

export default function Test() {
   
    return (
        <div>
            <h1 className={styles.main}>Contents - testing</h1>
            <Link href="/"><button>Home</button></Link>
        </div>
    )

}
 