import './parallax.css'

const Parallax = ({img, parallaxData}) => {
    return (
        <header className='parallax' style={{backgroundImage: `radial-gradient(circle at ${parallaxData.gradientRadius}, rgba(0,0,0,0), rgba(0,0,0,${parallaxData.gradientIntensity})), url(${img})`}}>
            <h1 style={{color: parallaxData.color}} className='parallax-title'>{parallaxData.title}</h1>
            <h2 style={{color: parallaxData.color}}>{parallaxData.callToAction}</h2>
        </header>
    )
}
export default Parallax