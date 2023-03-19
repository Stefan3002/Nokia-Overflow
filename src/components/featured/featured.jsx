import './featured.css'
import img from '../../utils/imgs/featured/FeaturedBanner.jpg'
import featuredData from './featured-data.json'
const Featured = () => {
    return (
        <div id='about' className="featured">
            <div className="featured-hero" style={{backgroundImage: `linear-gradient(to left, rgba(255,255,255,${featuredData.gradientIntensity1}), rgba(0,0,0,${featuredData.gradientIntensity2})),url("${img}")`}}>
                <div className="featured-hero-inner">
                    <h2>{featuredData.heroTitle}</h2>
                    <p className="delimiter">════ ⋆★⋆ ════</p>
                    <p>{featuredData.heroText}</p>
                </div>
            </div>
            <div className="featured-one">
                <div className="featured-one-inner">
                    <h2>{featuredData.topTitle}</h2>
                    <p className="delimiter">════ ⋆★⋆ ════</p>
                    <p>{featuredData.topText}</p>
                </div>
            </div>
            <div className="featured-two">
                <div className="featured-two-inner">
                    <h2>{featuredData.bottomTitle}</h2>
                    <p className="delimiter">════ ⋆★⋆ ════</p>
                    <p>{featuredData.bottomText}</p>
                </div>
            </div>
        </div>
    )
}
export default Featured