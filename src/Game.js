import FlashCards from "./FlashCards";
import Header from "./Header";

export default function Game(card) {
    return (
        <>
            <Header />
            <div className="flashcards">
                <FlashCards/>
            </div>
        </>
    )
}