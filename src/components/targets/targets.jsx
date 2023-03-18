import './targets.css'
import Typewriter from "../typewriter/typewriter";
import targetsData from './targets-data.json'
import Target from "../target/target";
import NetAdmin from '../../utils/imgs/smalls/NetAdmin.svg'
import WebDev from '../../utils/imgs/smalls/WebDev.svg'
import SystemAdmin from '../../utils/imgs/smalls/SystemAdmin.svg'
import SoftwareEng from '../../utils/imgs/smalls/SoftwareEng.svg'
import TeamLeader from '../../utils/imgs/smalls/TeamLeader.svg'
const Targets = () => {
    return (
        <div className='targets-container'>
            <div className="text-container">
                <h2>Are you a</h2>
                <Typewriter />
            </div>
            <div className="targets-inner">
                {targetsData.targets.map((target) => {
                    return <Target key={target.id} targetData={target} img={target.id === 'target1' ? SystemAdmin : target.id === 'target2' ? WebDev : target.id === 'target3' ? NetAdmin : target.id === 'target4' ? SoftwareEng : TeamLeader} />
                })}
            </div>
        </div>
    )
}
export default Targets