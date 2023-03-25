import './categories.css'
import ParallaxData from "./parallax-data-categories.json";
import ParallaxImg from "../../../utils/imgs/app/Headers/CategoriesBanner.jpg";
import Parallax from "../../landing-page/parallax/parallax";
import categoryDataStub from '../../../utils/data-stubs/question-categories.json'
import CategoryCard from "../../category-card/category-card";

const Categories = () => {
    const categoriesOptions = categoryDataStub.categoriesOptions

    return (
        <>
            <Parallax parallaxData={ParallaxData} img={ParallaxImg} height='40vh' />
            <div className='categories-container'>
                {
                    categoriesOptions.map((category, idx) => {
                        if (idx > 0)
                            return <CategoryCard cat={category} />
                    })
                }
            </div>
        </>
    )
}
export default Categories