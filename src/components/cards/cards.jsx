import './cards.css'
import img from "../../utils/imgs/NokiaBanner.jpg";
import img3 from "../../utils/imgs/NokiaBanner3.webp";
import img2 from "../../utils/imgs/NokiaBanner2.webp";
import Card from "../card/card";
import cardsData from './cards-data.json'
const Cards = () => {
    return (
        <div className='cards' id='high'>
            {cardsData.cards.map((cardData => {
                return <Card key={cardData.id} id={cardData.id} img={cardData.id === 1 ? img : cardData.id === 2 ? img2 : img3} title={cardData.title} text={cardData.text} />
            }))}
        </div>
    )
}
export default Cards