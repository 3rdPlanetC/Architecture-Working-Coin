// css
import styles from './styles/index.module.css'

export default function Footer(props) {
    return (
        <footer className={styles.footer}>
            <p className={styles.footer_text}>เว็บไซต์นี้เป็นผลงานของนักศึกษา วิชาออกแบบเว็ปไซต์</p>
            <p className={styles.footer_text}>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</p>
        </footer>
    )
}