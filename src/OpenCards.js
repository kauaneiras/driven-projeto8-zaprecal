import React from 'react';
import CardFront from "./CardsFront";
import styles from "./OpenCards.module.css"

export default function OpenCard(card) {
    const[open, setOpen] = React.useState(false);
    return open? (
        <>
            <CardFront question={card.question} answer={card.answer} number={card.number} quantitycards={card.quantitycards}/>
        </>
    ) :
    (
        <>
            <div className={styles.cards} onClick={() => setOpen(true)}>
                <h1>Pergunta {card.number}</h1>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        </>
    )
}