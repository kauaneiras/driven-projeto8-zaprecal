import Footer from "./Footer2";

function HtmlOneCloseCard(card) {
    return (
        <div className="card">
            <h1 className={card.color}>Pergunta {card.number}</h1>
            <ion-icon class={card.color} name={card.icon}></ion-icon>
        </div>
    )
}

export default function HtmlCloseCard(card) {
    if(card.color === "red"){
        return (
            <>
                <HtmlOneCloseCard color="red" icon="close-circle" number={card.number} />
                <Footer quantitycards={card.quantitycards} icon="1" color="red"/>
            </>
        )
    }if(card.color === "green"){
        return (
            <>
                <HtmlOneCloseCard color="green" icon="checkmark-circle" number={card.number} />
                <Footer quantitycards={card.quantitycards} icon="2" color="green" />
            </>
        )
    }if(card.color === "orange"){
        return (
            <>
                <HtmlOneCloseCard color="orange" icon="help-circle" number={card.number}/>
                <Footer quantitycards={card.quantitycards} icon="3" color="orange"/>
            </>
        )
    }
}