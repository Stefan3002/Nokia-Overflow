import './typewriter.css'
import {useEffect} from "react";
import startTypewriter from './typewriterLogic'
const Typewriter = () => {

    useEffect(() => {
        startTypewriter()
    }, [])

    return (
        <div className='typewriter-container'>
            <p className='container-typewriter'></p>
        </div>
    )
}
export default Typewriter