import './category-preview.css'
import {useDispatch} from "react-redux";
import {setCategoryPreviewImg} from "../../utils/store/utils-store/utils-actions";
import {useEffect, useState} from "react";
import WEBImg from '../../utils/imgs/WebDevCover.jpg'
import NetImg from '../../utils/imgs/NetworksCover.jpg'
import SoftImg from '../../utils/imgs/SoftwareEngCover.jpg'
import AIImg from '../../utils/imgs/AICover.jpg'
import BigDataImg from '../../utils/imgs/BigDataCover.jpg'
import SecImg from '../../utils/imgs/SecurityCover.jpg'

const CategoryPreview = ({data}) => {

    const [targetImg, setTargetImg] = useState(undefined)
    useEffect(() => {
        switch (data) {
            case 'WEB Development':
                setTargetImg(WEBImg)
                break
            case 'Network Administration':
                setTargetImg(NetImg)
                break
            case 'Software Engineering':
                setTargetImg(SoftImg)
                break
            case 'Artificial Intelligence':
                setTargetImg(AIImg)
                break
            case 'Big Data':
                setTargetImg(BigDataImg)
                break
            case 'Cyber Security':
                setTargetImg(SecImg)
                break
            default:
                break
        }
    }, [data])

    const dispatch = useDispatch()
    const changeCategoryPreviewImg = () => {
        dispatch(setCategoryPreviewImg(targetImg))
    }

    return (
        <div onMouseEnter={changeCategoryPreviewImg} className='category-preview'>
            <p>{data}</p>
        </div>
    )
}
export default CategoryPreview