// core
import { Fragment } from 'react'
// components
import { Topbar, Main, Footer } from '../components'
// css
import styles from '../static/styles/pages/start/index.module.css'
// image
import { Start } from '../static/images'

export default function Startpage() {
	return (
		<Fragment>
			<Topbar page="เหรียญบาทไทย - จุดเริ่มต้นของการสะสม"/>
			<Main>
				<section className={`${styles.start} container`}>
					<div className={styles.content_1}>
						<h1>จุดเริ่มต้นของการสะสม</h1>
						<span>เริ่มสะสมเหรียญตอนประมาณ พ.ศ. 2535 เพราะตอนนั้นเราเปิดร้านขายของช้า ซึ่งต้องอยู่กับเงินทั้งวัน ทำให้ได้เห็นเหรียญที่หลากหลายรูปแบบ พอได้เห็นเข้าบ่อยๆก็รู้สึกอยากจะเริ่มสะสม เพราะบางเหรียญนั้น เรียกได้ว่าหายากมาก นอกจากนี้การสะสมเหรียญยังเป็นการเพิ่มมูลค่าให้กับตัวเหรียญเองอีกด้วย</span>
					</div>
					<div className={styles.content_2}>
						<img src={Start.image1} alt="Hand Image" width="100%" />
					</div>
				</section>
			</Main>
			<Footer />
		</Fragment>
	)
}
