import './badges.css'
import goldBadge from '../../../utils/imgs/app/icons/GoldIcon.svg'
import silverBadge from '../../../utils/imgs/app/icons/SilverIcon.svg'
import bronzeBadge from '../../../utils/imgs/app/icons/BronzeIcon.svg'
import firstQuestionBadge from '../../../utils/imgs/app/icons/Firstquestion.svg'
import firstLikeReceivedBadge from '../../../utils/imgs/app/icons/Firstquestion.svg'
import thousandPlusLikesReceivedBadges from '../../../utils/imgs/app/icons/Firstquestion.svg'
import {useEffect, useState} from "react";

const Badges = ({bronzeBadgesNames, silverBadgesNames, goldBadgesNames}) => {

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
        for(const badge of silverBadgesNames)
            switch (badge){
                case 'firstLikeReceivedBadge':
                    const newSilverBadges = [...silverBadges, {
                        img: firstLikeReceivedBadge,
                        name: 'First Like Received!'
                    }]
                    setSilverBadges(newSilverBadges)
                    break
            }
        for(const badge of goldBadgesNames)
            switch (badge) {
                case '1000+LikesReceivedBadges':
                    const newGoldBadges = [...goldBadges, {
                        img: thousandPlusLikesReceivedBadges,
                        name: 'More than a 1000 likes received!'
                    }]
                    setGoldBadges(newGoldBadges)
                    break
            }
    }, [])
    if (goldBadges.length || silverBadges.length || bronzeBadges.length)
        return (
            <div className='badges-container'>
                <div className="profile-my-badges-header">
                    <h2 className='profile-section-header'>My Badges</h2>
                </div>
                {goldBadges.length ? <div className="gold-badges">
                    <img className='badge-icon' src={goldBadge} alt=""/>
                    <p>Senior Badges</p>
                    {
                        goldBadges.map(badge => {
                            return <img className='badge-icon' src={badge.img} alt={badge.name} name={badge}/>
                        })
                    }
                </div> : null}

                {silverBadges.length ? <div className="silver-badges">
                    <img className='badge-icon' src={silverBadge} alt=""/>
                    <p>Middle Badges</p>
                    {
                        silverBadges.map(badge => {
                            return <img className='badge-icon' src={badge.img} alt={badge.name} name={badge}/>
                        })
                    }
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
    else
        return null
}
export default Badges