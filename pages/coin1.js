// core
import { Fragment } from 'react'
// components
import { Topbar, Main, Footer } from '../components'
// css
import styles from '../static/styles/pages/coin1/index.module.css'
// image
import { Coin1 } from '../static/images'

export default function Coin1page() {
	return (
		<Fragment>
			<Topbar page="เหรียญบาทไทย - เหรียญ 1 บาท"/>
			<Main>
				<section className={`${styles.coin1} container`}>
                    <h1 className={styles.h1}>เหรียญ 1 บาท</h1>
                    <div className={styles.content_1}>
                        <div className={styles.content_title}>
                            <h1 className={styles.h1}>2505</h1>
                        </div>
                        <div className={styles.content_image}>
                            <img src={Coin1.image1} alt="Coin1 Image1" width="100%"/>
                        </div>
                        <div className={styles.content_1_detail}>
                            <h2>เหรียญ 1 บาทตราแผ่นดิน</h2>
                            <p>รายละเอียด :</p>
                            <div className={styles.boxDetail}>
                                <p>ด้านหน้า - เป็นพระบรมรูปพระบาทสมเด็จพระเจ้าอยู่หัวภูมิพลอดุลยเดชครึ่งพระองค์ผินพระพักตร์เบื้องซ้าย ริมขอบบนมีพระปรมาภิไธย "ภูมิพลอดุลยเดช รัชกาลที่ ๙"</p>
                                <p>ด้านหลัง - เป็นรูปตราแผ่นดินในรัชกาลที่ 5 แต่ยอดพระมหาพิชัยมงกุฎไม่มีรัศมีริมขอบบนมีข้อความว่า "รัฐบาลไทย พ.ศ. ๒๕๐๕" เบื้องล่างมีข้อความบอกราคา "หนึ่งบาท"</p>
                                <p>เส้นผ่าศูนย์กลลาง 27 มิลลิเมตร</p>
                                <p>น้ำหนัก 7.5 กรัม</p>
                                <p>วันที่ประกาศใช้ 4 ธันวาคม พ.ศ. 2505</p>
                                <img src={Coin1.image2} alt="Coin1 Image2" width="250px" className={styles.detailImage} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.content_2}>
                        <div className={styles.content_title}>
                            <h1 className={styles.h1}>2515</h1>
                        </div>
                        <div className={styles.content_image}>
                            <img src={Coin1.image3} alt="Coin1 Image3" width="100%"/>
                        </div>
                        <div className={styles.content_detail}>
                            <h2>เหรียญ 1 บาทเป็นสยามกุฎราชกุมาร</h2>
                            <p>รายละเอียด :</p>
                            <div className={styles.boxDetail}>
                                <p>ด้านหน้า - เป็นพระบรมรูปพระบาทสมเด็จพระเจ้าลูกยาเธอ เจ้าฟ้ามหาวิชราลงกรณ์ระดับพระอังสา ทรงเครื่องเต็ฒยศทหารมหาดเล็ก ผินพระพักตร์เบื้องซ้าย ริมขอบมีข้อความว่า "มหาวชิราลงกรณ์ สยามมงกุฎราชกุมาร"</p>
                                <p>ด้านหลัง - เป็นพระนามาภิไธยย่อ "วก" ใต้พระจุลมงกุฎยอดเปล่งรัศมีริมขอบบนมีข้อความว่า "รัฐบาลไทย ๒๘ ธันวาคม ๒๕๑๔" เบื้องล่างมีข้อความบอกราคา "๑ บาท" เบื้องล่างมีข้อความบอกราคา "หนึ่งบาท"</p>
                                <p>เส้นผ่าศูนย์กลลาง 27 มิลลิเมตร</p>
                                <p>น้ำหนัก 7.5 กรัม</p>
                                <p>วันที่ประกาศใช้ 21 ธันวาคม พ.ศ. 2515</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.content_3}>
                        <div className={styles.content_title}>
                            <h1 className={styles.h1}>2518</h1>
                        </div>
                        <div className={styles.content_image}>
                            <img src={Coin1.image4} alt="Coin1 Image4" width="100%"/>
                        </div>
                        <div className={styles.content_detail}>
                            <h2>เหรียญ 1 บาท SEAP GAMES (กีฬาแหลมทอง)</h2>
                            <p>รายละเอียด :</p>
                            <div className={styles.boxDetail}>
                                <p>ด้านหน้า - เป็นพระบรมรูปพระบาทสมเด็จพระเจ้าอยู่หัวภูมิพลอดุลยเดชและสมเด็จพระนางเจ้าพระบรมราชินีนาถ ผืนพระพักตร์เบื้องขวา ริมขอบบนมีข้อความว่า "รัฐบาลไทย พ.ศ. ๒๕๑๘" เบื้องล่างด้านซ้ายมีเลขและอักษรไทยว่า "๑ บาท" เบื้องล่างด้านขวามีเลขรหัสอารบิกและอักษรโรมันว่า "1 BATH"</p>
                                <p>ด้านหลัง - มีห่วงวงกลมเกี่ยวกันเป็นลูกโซ่ 6 ห่วง หมายถึง 6 ประเทศ อยู่ในวงกลม นอกวงเป็นกลีบดอกไม้ลายไทยซ้อนทับกันแปดกลีบ ริมขอบบนเป็นอักษรโรมัน "VII SEAP GAMES" ริมชอบล่างมีอักษรโรมันว่า "BANGKOK 1975"</p>
                                <p>เส้นผ่าศูนย์กลลาง 25 มิลลิเมตร</p>
                                <p>น้ำหนัก 7 กรัม</p>
                                <p>วันที่ประกาศใช้ 12 สิงหาคม พ.ศ. 2518</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.content_4}>
                        <div className={styles.content_title}>
                            <h1 className={styles.h1}>2525</h1>
                        </div>
                        <div className={styles.content_image}>
                            <img src={Coin1.image5} alt="Coin1 Image5" width="100%"/>
                        </div>
                        <div className={styles.content_detail}>
                            <h2>เหรียญ 1 บาท FAO รวงข้าว(เนื่องในวันอาหารโลก)</h2>
                            <p>รายละเอียด :</p>
                            <div className={styles.boxDetail}>
                                <p>ด้านหน้า - กลางเหรียญมีพระบรมรูปพระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดชผินพระพักตร์ทางเบื้องซ้าย ทรงเครื่องบรมขัตติยราชภูษิตาภรณ์ ทรงฉลองพระองค์ครุยชิดวงขอบเหรียญด้านซ้าย มีข้อความว่า "ประเทศไทย" ด้านขวามีข้อความว่า "รัชกาลที่ ๙"</p>
                                <p>ด้านหลัง - กลางเหรียญมีรูปต้นสับปะรด ต้นข้าว และปลาเบื้องบนมีสัญลักษณ์วันอาหารโลกขององค์การอาหารและเกษตรแห่งสหประชาชาติ ด้านซ้ายมีเลข บอกราคา ด้านขวามีคำว่า "บาท" ชิดวงขอบเหรียญ เบื้องล่างมีข้อความว่า "พ.ศ. ๒๕๒๕"</p>
                                <p>เส้นผ่าศูนย์กลลาง 25 มิลลิเมตร</p>
                                <p>น้ำหนัก 7 กรัม</p>
                                <p>วันที่ประกาศใช้ 10 มิถุนายน พ.ศ. 2525</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.content_5}>
                        <div className={styles.content_title}>
                            <h1 className={styles.h1}>2539</h1>
                        </div>
                        <div className={styles.content_image}>
                            <img src={Coin1.image6} alt="Coin1 Image6" width="100%"/>
                        </div>
                        <div className={styles.content_detail}>
                            <h2>เหรียญ 1 บาท พระราชพิธีกาญจนาภิเษกพระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดช</h2>
                            <p>รายละเอียด :</p>
                            <div className={styles.boxDetail}>
                                <p>ด้านหน้า - กลางเหรียญมีพระรูปพระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดชทรงเครื่องบรมขัตติยราชภูษิตาภรณ์ ทรงฉลองพระองค์ครุยชิดวงขอบเหรียญมีข้อความว่า "พระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดชฯสยามินทราธิราชบรมนาถบพิตร" "รัชกาลที่ ๙" โดยมีลายกระหนกคั่นระหว่างข้อความ</p>
                                <p>ด้านหลัง - กลางเหรียญมีรูปต้นสับปะรด ต้นข้าว และปลาเบื้องบนมีสัญลักษณ์วันอาหารโลกขององค์การอาหารและเกษตรแห่งสหประชาชาติ ด้านซ้ายมีเลข บอกราคา ด้านขวามีคำว่า "บาท" ชิดวงขอบเหรียญ เบื้องล่างมีข้อความว่า "พ.ศ. ๒๕๒๕"</p>
                                <p>เส้นผ่าศูนย์กลลาง 20 มิลลิเมตร</p>
                                <p>น้ำหนัก 3.4 กรัม</p>
                                <p>วันที่ประกาศใช้ 6 มีนาคม พ.ศ. 2539</p>
                                <img src={Coin1.image7} alt="Coin1 Image7" width="250px" className={styles.detailImage} />
                            </div>
                        </div>
                    </div>
				</section>
			</Main>
			<Footer />
		</Fragment>
	)
}
