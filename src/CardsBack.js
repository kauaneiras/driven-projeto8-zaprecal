import React from "react";
import CloseCard from "./CloseCards"

export default function CardBack(card) {
    const [closeCard,setCloseCard] = React.useState(false);
    return closeCard? 
    (
        <CloseCard color={closeCard} number={card.number} decklength={card.decklength}/>
    ) :
    (
        <div className="answer">
            <p>{card.answer}</p>
            <div className="resultcolor">
                <p className="red" onClick={() => setCloseCard("red")}>Não lembrei</p>
                <p className="orange" onClick={() => setCloseCard("orange")}>Quase não lembrei</p>
                <p className="green" onClick={() => setCloseCard("green")}>Zap!</p>
            </div>
        </div>
    )
}