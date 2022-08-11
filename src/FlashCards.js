import OpenCard from "./OpenCards";
import Footer1 from "./Footer1";

export default function FlashCards() {
    let suffle = (Deck.sort(() => Math.random() - 0.5)).slice(4);
    let quantitycards = 4;
    let namecard = 1;
    return(
        <>
            {suffle.map(card => <OpenCard question={card.question} number={namecard++} answer={card.answer} quantitycards={quantitycards}/>)}
            <Footer1 quantitycards={quantitycards}/>
        </>
    )
}

const Deck =[
    {id: "1", question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
    {id: "2", question: "O React é __ ", answer: "uma biblioteca JavaScript para construção de interfaces"},
    {id: "3", question: "Componentes devem iniciar com __ ", answer: "letra maiúscula"},
    {id: "4", question: "Podemos colocar __ dentro do JSX", answer: "expressões"},
    {id: "5", question: "O ReactDOM nos ajuda __ ", answer: "interagindo com a DOM para colocar componentes React na mesma"},
    {id: "6", question: " Usamos o npm para __  ", answer: "gerenciar os pacotes necessários e suas dependências"},
    {id: "7", question: "Usamos props para __ ", answer: "passar diferentes informações para componentes"},
    {id: "8", question: "Usamos estado (state) para __ ",answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
]
