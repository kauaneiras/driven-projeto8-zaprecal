//import Message from "./Message"
import styles from "./Footer2.module.css"

let object = [];
let goals = 0;
let correct = true;

export default function Footer(card) {
    if(card.icon === "1"){
        correct = false;
    }
    goals = goals+1;
    return goals < 4?(
            <Footer2 goals={goals} quantitycards={4} icon={card.icon}/>
        )
        :(
            <>
                <Messages status={correct === false} />
                <Footer2 goals={goals} quantitycards={4} icon={card.icon}/>
            </>
        )
        
}

function Messages(status) {
    if(status.status === true){
        return (
            <div className={styles.message}>
                <h2>😢 Putz...</h2>
                <p>Ainda faltam alguns...</p>
                <p>Mas não desanime!</p>
            </div>
        )
    }else if (status.status === false){
        return (
            <div className={styles.message}>
                <h2>🥳 Parabéns!</h2>
                <p>Você não esqueceu de nenhum flashcard!</p>
            </div>
        )
    }
} 

function ResultIcon(answer) {
    if(answer.icon === "1"){
        return (<><ion-icon class="red" name="close-circle"></ion-icon></>)}
    if(answer.icon === "2"){
        return (<><ion-icon class="green" name="checkmark-circle"></ion-icon></>)}
    if(answer.icon === "3"){
        return (<><ion-icon class="orange" name="help-circle"></ion-icon></>)}
}

function Footer2(goals) {
    object = [...object,goals.icon];
    return (
        <footer className={styles.footer2}>
            <div className="icons">
                {object.map(answer => <ResultIcon icon={answer} />)}
            </div>
            <h1>{goals.goals}/{4}-CONCLUÍDOS</h1>
        </footer>
    )
}



