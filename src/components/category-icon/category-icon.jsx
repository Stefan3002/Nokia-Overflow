import './category-icon.css'
import {useEffect, useState} from "react";
import imgWEB from '../../utils/imgs/landing-page/smalls/WebDev.svg'
import imgNetAdm from '../../utils/imgs/landing-page/smalls/NetAdmin.svg'
import imgSoftEng from '../../utils/imgs/landing-page/smalls/SoftwareEng.svg'
const CategoryIcon = ({cat}) => {
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

    return (
        <img className='category-icon-container' src={img} alt={cat}/>
    )
}
export default CategoryIcon