// core
import { Fragment } from 'react'
// components
import { Topbar, Main, Footer } from '../components'
// css
import styles from '../static/styles/pages/coin5/index.module.css'
// image
import { Coin5 } from '../static/images'

export default function Coin5page() {
	return (
		<Fragment>
			<Topbar page="เหรียญบาทไทย - เหรียญ 5 บาท"/>
			<Main>
				<section className={`${styles.coin5} container`}>
                    <h1 className={styles.h1}>เหรียญ 5 บาท</h1>
                    <div className={styles.content_1}>
                        <div className={styles.content_title}>
                            <h1 className={styles.h1}>2520</h1>
                        </div>
                        <div className={styles.content_image}>
                            <img src={Coin5.image1} alt="Coin5 Image1" width="100%"/>
                        </div>
                        <div className={styles.content_1_detail}>
                            <h2>เหรียญ 5 บาท ครุฑเฉียง</h2>
                            <p>รายละเอียด :</p>
                            <div className={styles.boxDetail}>
                                <p>ด้านหน้า - เป็นพระบรมรูปพระบาทสมเด็จพระเจ้าอยู่หัวภูมิพลอดุลยเดชประดับพระอังสา ผินพระพักตร์เบื้องซ้าย ริมขอบซ้ายมีข้อความว่า "สยามมินทร์" ริมขอบขวาว่า "รัชกาลที่ ๙"</p>
                                <p>ด้านหลัง - เป็นรูปครุฑพ่าห์เฉียงซ้าย เบื้องบนมีข้อความว่า "ประเทศไทย" เบื้องซ้ายมีเลขไทยและข้อความบอกราคา "๕ บาท" เบื้องล่างบอกปีที่ผลิต</p>
                                <p>เส้นผ่าศูนย์กลลาง 29.5 มิลลิเมตร</p>
                                <p>น้ำหนัก 12 กรัม</p>
                                <p>วันที่ประกาศใช้ 30 สิงหาคม พ.ศ. 2520</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.content_2}>
                        <div className={styles.content_title}>
                            <h1 className={styles.h1}>2523</h1>
                        </div>
                        <div className={styles.content_image}>
                            <img src={Coin5.image2} alt="Coin5 Image2" width="100%"/>
                        </div>
                        <div className={styles.content_detail}>
                            <h2>เหรียญ 5 บาท พระราชินี FAO CERES</h2>
                            <p>รายละเอียด :</p>
                            <div className={styles.boxDetail}>
                                <p>ด้านหน้า - เป็นพระบรมรูปสมเด็จพระเจ้าฯพระบรมราชินีนาถ ทรงฉลองพระงค์ชุด ระดับพระอังสา ผินพระพักตร์เบื้องซ้าย ริมขอบซ้ายมีข้อความว่า "สมเด็จพระนางเจ้าสิริกิตติ์" ริมขอบขวามีข้อความว่า "พระบรมราชินีนาถ"</p>
                                <p>ด้านหลัง - เป็นวงกรอบโค้งสองวง วงซ้ายเป็นรูปหญิงชาวนาสววมงอบกำลังดำนา ในวงขอบขวาเป็นรูปหญิงกำลังทอผ้าด้วยกี่กระตุกระหว่างกรอบบน มีข้อความเป็นอักษรรโรมัน "CERES" ระหว่างขอบล่างมีข้อความว่า "FAO" ริมซ้ายมีข้อความว่า "12th AUGUST 1980 THAILAND" ริมขอบล่างมีข้อความบอกราคาความเป็นภาษาไทยและภาษาอังกฤษ</p>
                                <p>เส้นผ่าศูนย์กลลาง 30 มิลลิเมตร</p>
                                <p>น้ำหนัก 12 กรัม</p>
                                <p>วันที่ประกาศใช้ 17 มิถุนายน พ.ศ. 2523</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.content_3}>
                        <div className={styles.content_title}>
                            <h1 className={styles.h1}>2525</h1>
                        </div>
                        <div className={styles.content_image}>
                            <img src={Coin5.image3} alt="Coin5 Image3" width="100%"/>
                        </div>
                        <div className={styles.content_detail}>
                            <h2>เหรียญ 5 บาท พระราชินี ครุฑตรง</h2>
                            <p>รายละเอียด :</p>
                            <div className={styles.boxDetail}>
                                <p>ด้านหน้า - กลางเหรียญมีพระบรมรูปพระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดชผินพระพักตร์ทางเบื้องซ้าย ทรงเครื่องบรมขัตติยราชภูษิตาภรณ์ ทรงฉลองพระองค์ครุยชิดวงขอบเหรียญด้านซ้าย มีข้อความว่า "ภูมิพลอดุลยเดช" ด้านขวามีข้อความว่า "รัชกาลที่ ๙"</p>
                                <p>ด้านหลัง - กลางเหรียญมีรูปครุฑพ่าห์ ชิดวงขอบเหรียญเบื้องบน มีข้อความว่า "พ.ศ. ๒๕๒๕" เบื้องล่างมีข้อความว่า "ประเทศไทย" ด้านซ้ายมีเลข "๕" ด้านขวามีเลข "5" ใต้รูปครุฑมีคำว่า "บาท" ใต้คำว่า "บาท" มีเครื่องหมายโรงกษาปณ์และมีเลขย่อของปีพุทธศักราชที่ผลิตเหรียญออกใช้</p>
                                <p>เส้นผ่าศูนย์กลลาง 30 มิลลิเมตร</p>
                                <p>น้ำหนัก 12 กรัม</p>
                                <p>วันที่ประกาศใช้ 9 ธันวาคม พ.ศ. 2525</p>
                                <img src={Coin5.image4} alt="Coin5 Image4" width="250px" className={styles.detailImage} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.content_4}>
                        <div className={styles.content_title}>
                            <h1 className={styles.h1}>2530</h1>
                        </div>
                        <div className={styles.content_image}>
                            <img src={Coin5.image5} alt="Coin5 Image5" width="100%"/>
                        </div>
                        <div className={styles.content_detail}>
                            <h2>เหรียญ 5 บาท เรือหงส์</h2>
                            <p>รายละเอียด :</p>
                            <div className={styles.boxDetail}>
                                <p>ด้านหน้า - กลางเหรียญมีพระบรมรูปพระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดชผินพระพักตร์ทางเบื้องซ้าย ทรงเครื่องบรมขัตติยราชภูษิตาภรณ์ ทรงฉลองพระองค์ครุยชิดวงขอบเหรียญด้านซ้ายมีข้อความว่า "ภูมิพลอดุลยเดช" ด้านขวามีข้อความว่า "ภูมิพลอดุลยเดช" ด้านขวามีข้อความว่า "รัชกาลที่ ๙"</p>
                                <p>ด้านหลัง - มีรูปส่วนหัวของเรือพระที่นั่งสุพรรณหงส์ ที่ปากหงส์ห้อยพวงแก้วพู่จามรีและมีรูปพระบรมมหาราชวังเป็นส่วนประกอบอยู่เบื้องหลังชิดวงขอบเหรียญเบื้องล่างมีข้อความว่า "๕ บาท 5" "ประเทศไทย" และปี พ.ศ. ที่จัดทำเหรียญ</p>
                                <p>เส้นผ่าศูนย์กลลาง 24 มิลลิเมตร</p>
                                <p>น้ำหนัก 7.5 กรัม</p>
                                <p>วันที่ประกาศใช้ 8 สิงหาคม พ.ศ. 2530</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.content_5}>
                        <div className={styles.content_title}>
                            <h1 className={styles.h1}>2539</h1>
                        </div>
                        <div className={styles.content_image}>
                            <img src={Coin5.image6} alt="Coin5 Image6" width="100%"/>
                        </div>
                        <div className={styles.content_detail}>
                            <h2>เหรียญ 5 บาท พระราชพิธีกาญจนาภิเษก พระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดช</h2>
                            <p>รายละเอียด :</p>
                            <div className={styles.boxDetail}>
                                <p>ด้านหน้า - กลางเหรียญมีพระรูปพระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดชทรงเครื่องขัตติยราชภูษิตาภรณ์ ทรงฉลองพระองค์ครุย ชิดวงขอบเหรียญมีข้อความว่า "พระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดชฯ สยามินทราธิราชบรมนาถบพิตร "รัชกาลที่ ๙" โดยมีลายกระหนกคั่นระหว่างข้อความ</p>
                                <p>ด้านหลัง - กลางเหรียญมีสัญลักษณ์งานฉลองสิริราชสมบัติครบ 50 ปีชิดวงขอบเหรียญมีข้อความว่า "ฉลองสิริราชสมบัติครบ ๕๐ ปี กาญจนาภิเษก ๙ มิถุนายน ๒๕๓๙ ประเทศไทย" และข้อความบอกราคา</p>
                                <p>เส้นผ่าศูนย์กลลาง 24 มิลลิเมตร</p>
                                <p>น้ำหนัก 7.5 กรัม</p>
                                <p>วันที่ประกาศใช้ 6 มีนาคม พ.ศ. 2539</p>
                                <img src={Coin5.image7} alt="Coin5 Image7" width="250px" className={styles.detailImage} />
                            </div>
                        </div>
                    </div>
				</section>
			</Main>
			<Footer />
		</Fragment>
	)
}
