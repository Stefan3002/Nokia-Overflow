import './category-icon.css'
import {useEffect, useState} from "react";
import imgWEB from '../../utils/imgs/landing-page/smalls/WebDev.svg'
import imgWebDev from '../../utils/imgs/landing-page/smalls/WebDev.svg'
import imgNetAdm from '../../utils/imgs/landing-page/smalls/NetAdmin.svg'
import imgSoftEng from '../../utils/imgs/landing-page/smalls/SoftwareEng.svg'
import imgBigData from '../../utils/imgs/landing-page/smalls/BigData.svg'
import imgCyberSec from '../../utils/imgs/landing-page/smalls/CyberSec.svg'
import imgAI from '../../utils/imgs/landing-page/smalls/AILogo.svg'

const CategoryIcon = ({cat}) => {
    const [img, setImg] = useState(null)

    useEffect(() => {
        switch (cat) {
            case 'WEB':
                setImg(imgWEB)
                break
            case 'Network Administration':
                setImg(imgNetAdm)
                break
            case 'Software Engineering':
                setImg(imgSoftEng)
                break
            case 'Big Data':
                setImg(imgBigData)
                break
            case 'WEB Development':
                setImg(imgWebDev)
                break
            case 'Cyber Security':
                setImg(imgCyberSec)
                break
            case 'Artificial Intelligence':
                setImg(imgAI)

        }
    }, [])

    return (
        <img className='category-icon-container' src={img} alt={cat}/>
    )
}
export default CategoryIcon