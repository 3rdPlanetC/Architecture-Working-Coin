// core
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
// css
import styles from './styles/index.module.css'
// image
import { Logo } from '../../static/images'

export default function Topbar(props) {
    // props
    const { page } = props
    // useRouter
    const router = useRouter()
    return (
        <nav>
            <Head>
                <title>{page}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {router.pathname !== "/" && (
                <div className={styles.logo}>
                    <img src={Logo} alt="Logo Coin" className={styles.logoImage}/>
                </div>
            )}
            <div className={styles.navbar}>
                <ul className={styles.navbarList}>
                    <li className={styles.list}>
                        <Link href="/">
                            <a>หน้าหลัก</a>
                        </Link>
                    </li>
                    <li className={styles.list}>
                        <Link href="/start">
                            <a>จุดเริ่มต้นของการสะสม</a>
                        </Link>
                    </li>
                    <li className={styles.list}>
                        <Link href="/coin1">
                            <a>เหรียญ 1 บาท</a>
                        </Link>
                    </li>
                    <li className={styles.list}>
                        <Link href="/coin5">
                            <a>เหรียญ 5 บาท</a>
                        </Link>
                    </li>
                    <li className={styles.list}>
                        <Link href="/coin10">
                            <a>เหรียญ 10 บาท</a>
                        </Link>
                    </li>
                    <li className={styles.list}>
                        <Link href="/maintain">
                            <a>วิธีการเก็บรักษาเหรียญ</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}