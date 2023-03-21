import './main-app.css'
import Trending from "../../trending/trending";
import Unanswered from "../../unanswered/unanswered";
const MainApp = () => {
    return (
        <div className='main-app-container'>
            <div className="main-app-left">
                <Trending />
            </div>
            <div className="main-app-right">
                <Unanswered />
            </div>
        </div>
    )
}
export default MainApp