import styles from "./Footer1.module.css"

export default function Footer1(card) {
    return (
        <footer className={styles.footer}>
            <h1>0/{card.quantitycards}-CONCLUÍDOS</h1>
        </footer>
    )
}