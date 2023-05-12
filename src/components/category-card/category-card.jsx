import './category-card.css'
import {useEffect, useState} from "react";
import imgWEB from "../../utils/imgs/landing-page/smalls/WebDev.svg";
import imgWEBCover from "../../utils/imgs/WebDevCover.jpg";
import imgNetAdm from "../../utils/imgs/landing-page/smalls/NetAdmin.svg";
import imgNetAdmCover from "../../utils/imgs/NetworksCover.jpg";
import imgSoftEng from "../../utils/imgs/landing-page/smalls/SoftwareEng.svg";
import imgSoftEngCover from "../../utils/imgs/SoftwareEngCover.jpg";
import imgAI from "../../utils/imgs/landing-page/smalls/AILogo.svg";
import imgAICover from "../../utils/imgs/AICover.jpg";
import imgBigData from "../../utils/imgs/landing-page/smalls/BigData.svg";
import imgBigDataCover from "../../utils/imgs/BigDataCover.jpg";
import imgSecurity from "../../utils/imgs/landing-page/smalls/Security.svg";
import imgSecurityCover from "../../utils/imgs/SecurityCover.jpg";
import {useNavigate} from "react-router";

const CategoryCard = ({cat}) => {
    const nav = useNavigate()
    const [img, setImg] = useState(null)
    const [coverImg, setCoverImg] = useState(null)

    useEffect(() => {
        switch (cat) {
            case 'WEB Development':
                setImg(imgWEB)
                setCoverImg(imgWEBCover)
                break
            case 'Network Administration':
                setImg(imgNetAdm)
                setCoverImg(imgNetAdmCover)
                break
            case 'Software Engineering':
                setImg(imgSoftEng)
                setCoverImg(imgSoftEngCover)
                break
            case 'Artificial Intelligence':
                setImg(imgAI)
                setCoverImg(imgAICover)
                break
            case 'Big Data':
                setImg(imgBigData)
                setCoverImg(imgBigDataCover)
                break
            case 'Cyber Security':
                setImg(imgSecurity)
                setCoverImg(imgSecurityCover)
                break
        }
    }, [])

    const getCategoryQuestions = async () => {
        nav(`/app/trending/${cat}`)
    }

    return (
        <div onClick={getCategoryQuestions} style={{backgroundImage: `URL(${coverImg})`}}
             className='category-card-container'>
            <img className='category-icon' src={img} alt={cat}/>
            <p>{cat}</p>
            {/*<Divider />*/}
            {/*<p>{cat}</p>*/}
        </div>
    )
}
export default CategoryCard