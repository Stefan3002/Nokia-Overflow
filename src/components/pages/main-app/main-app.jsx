import './main-app.css'
import Trending from "../../trending/trending";
const MainApp = () => {
    return (
        <div className='main-app-container'>
            <div className="main-app-left">
                <Trending />
            </div>
            <div className="main-app-right">

            </div>
        </div>
    )
}
export default MainApp