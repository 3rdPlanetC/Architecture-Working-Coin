// core
import { Fragment } from 'react'
// components
import { Topbar, Main, Footer } from '../components'
// css
import styles from '../static/styles/pages/index/index.module.css'
// images
import { Home } from '../static/images'

export default function Homepage() {
	return (
		<Fragment>
			<Topbar page="เหรียญบาทไทย - หน้าแรก"/>
			<Main>
				<section className={`${styles.homepage} container`}>
					<div className={styles.content_box1}>
						<img src={Home.image1} width="250"/>
					</div>
					<div className={styles.content_box2} >
						<img src={Home.image2} width="100%"/>
					</div>
					<div className={styles.content_box3}>
						<img src={Home.image3} width="auto" height="350px"/>
					</div>
					<div>
						<span className={styles.content_code}>collection-of-coin.com</span>
					</div>
				</section>
			</Main>
			<Footer />
		</Fragment>
	)
}
