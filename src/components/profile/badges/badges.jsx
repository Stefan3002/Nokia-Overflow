import './badges.css'
import goldBadge from '../../../utils/imgs/app/icons/GoldIcon.svg'
import silverBadge from '../../../utils/imgs/app/icons/SilverIcon.svg'
import bronzeBadge from '../../../utils/imgs/app/icons/BronzeIcon.svg'
import firstQuestionBadge from '../../../utils/imgs/app/icons/Firstquestion.svg'
import {useEffect, useState} from "react";
const Badges = ({bronzeBadgesNames}) => {

    const [bronzeBadges, setBronzeBadges] = useState([])
    const [goldBadges, setGoldBadges] = useState([])
    const [silverBadges, setSilverBadges] = useState([])

    useEffect(() => {
        for(const badge of bronzeBadgesNames)
            switch (badge){
                case 'firstQuestionBadge':
                    const newBronzeBadges = [...bronzeBadges, {
                        img: firstQuestionBadge,
                        name: 'First Nok Created'
                    }]
                    setBronzeBadges(newBronzeBadges)
                    break
            }
    }, [])

    return (
        <div className='badges-container'>
            {goldBadges.length ? <div className="gold-badges">
                <img className='badge-icon' src={goldBadge} alt=""/>
                <p>Senior Badges</p>
            </div> : null}

            {silverBadges.length ? <div className="silver-badges">
                    <img className='badge-icon' src={silverBadge} alt=""/>
                    <p>Middle Badges</p>
                </div> : null}

            {bronzeBadges.length ? <div className="bronze-badges">
                    <img className='badge-icon' src={bronzeBadge} alt=""/>
                    <p>Junior Badges</p>
                    {
                        bronzeBadges.map(badge => {
                            return <img className='badge-icon' src={badge.img} alt={badge.name} name={badge}/>
                        })
                    }
                </div> : null}

        </div>
    )
}
export default Badges