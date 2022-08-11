import React from "react";
import Game from "./Game";
import styles from"./Home.module.css"

export default function Home() {
    return (
        <div className={styles.sizepage}>
            <HomePage/>
        </div>
    )
}

function HomePage() {
    const [homepage,setHomePage] = React.useState(true);
    return homepage? (
    <>
        <div className={styles.alignitenspage}>        
            <img src="./image/logo.png"/>
            <h1>ZapRecall</h1>
        </div>
        <button onClick={() => setHomePage(false)} className={styles.buttoniniciar}><h1>Iniciar Recall!</h1></button>
    </>
    ) : (<Game/>)
}