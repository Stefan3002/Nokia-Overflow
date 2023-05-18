import './choice-cards.css'
import ChoiceCard from "../choice-card/choice-card";
import {useSelector} from "react-redux";
import {getUser} from "../../utils/store/user-store/user-selectors";
import {useState} from "react";

const ChoiceCards = ({setCards, cards}) => {

    const inArray = (el, array) => {
        for (let elem of array)
            if (elem === el)
                return true

        return false
    }

    const userData = useSelector(getUser)
    const [selectedCards, setSelectedCards] = useState(userData.interests)

    const onClick = (selectedCard) => {
        let newSelectedCards = []
        if (!inArray(selectedCard, selectedCards))
            newSelectedCards = [...selectedCards, selectedCard]
        else
            newSelectedCards = selectedCards.filter(card => card !== selectedCard)
        setSelectedCards(newSelectedCards)
        setCards(newSelectedCards)
    }


    if (selectedCards)
        return (
            <div className="category-cards">
                {cards.map((data, idx) => {
                    console.log(data, selectedCards)
                    if (idx > 0)
                        return <ChoiceCard onClick={onClick} chosen={inArray(data, selectedCards)} data={data}/>
                })}
            </div>
        )
}
export default ChoiceCards