import styles from "./Header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <img src="./image/logo.png"/>
            <h1>ZapRecall</h1>
        </header>
    )
}