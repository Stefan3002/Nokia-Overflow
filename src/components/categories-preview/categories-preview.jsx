import './categories-preview.css'
import categoriesOptions from '../../utils/data-stubs/question-categories.json'
import CategoryPreview from "../category-preview/category-preview";
import defaultPreviewImg from '../../utils/imgs/landing-page/parallax/NokiaBanner.jpg'
import {useSelector} from "react-redux";
import {getCategoryPreviewImg} from "../../utils/store/utils-store/utils-selectors";

const CategoriesPreview = () => {

    const previewImg = useSelector(getCategoryPreviewImg)

    return (
        <div className='categories-preview'>
            <div className="categories-preview-info">
                {
                    categoriesOptions.categoriesOptions.map((categoryOption, idx) => {
                        if (idx > 0)
                            return <CategoryPreview data={categoryOption}/>
                    })
                }
            </div>
            <div className="categories-preview-img">
                <img src={previewImg ? previewImg : defaultPreviewImg} alt=""/>
            </div>
        </div>
    )
}
export default CategoriesPreview