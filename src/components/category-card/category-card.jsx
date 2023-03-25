import './category-card.css'
import {useEffect, useState} from "react";
import imgWEB from "../../utils/imgs/landing-page/smalls/WebDev.svg";
import imgNetAdm from "../../utils/imgs/landing-page/smalls/NetAdmin.svg";
import imgSoftEng from "../../utils/imgs/landing-page/smalls/SoftwareEng.svg";
import Divider from "../divider/divider";
const CategoryCard = ({cat}) => {

    const [img, setImg] = useState(null)

    useEffect(() => {
        switch (cat){
            case 'WEB':
                setImg(imgWEB)
                break
            case 'Network Administration':
                setImg(imgNetAdm)
                break
            case 'Software Engineering':
                setImg(imgSoftEng)
                break
        }
    }, [])

    const displayCategoryName = () => {

    }

    return (
        <div onMouseEnter={displayCategoryName} className='category-card-container'>
            <img className='category-icon' src={img} alt={cat}/>
            {/*<Divider />*/}
            {/*<p>{cat}</p>*/}
        </div>
    )
}
export default CategoryCard