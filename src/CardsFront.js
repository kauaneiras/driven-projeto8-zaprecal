import React from "react";
import CardBack from "./CardsBack";
import styles from "./CardsFront.module.css"

export default function CardFront(card) {

    const [showAnswer, setShowAnswer] = React.useState(false);

    return showAnswer? (<CardBack answer={card.answer} number={card.number} decklength={card.decklength}/>) : 
    (
        <div className={styles.cardfront}>
            <p>{card.question}</p>
            <img onClick={() => setShowAnswer(true)} src="./image/setinha.png"/>
        </div>
    )
}