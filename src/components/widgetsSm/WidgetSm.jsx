import { Visibility } from '@material-ui/icons'
import './widgetSm.css'

export default function WidgetSm() {
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="./assets/image1.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Udeze Ernest</span>
                        <span className="widgetSmUserTitle">Software Engnr</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="./assets/image1.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Udeze Rachael</span>
                        <span className="widgetSmUserTitle">Data Scientist</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="./assets/image1.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Udeze Alesha</span>
                        <span className="widgetSmUserTitle">Astronaut</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="./assets/image1.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Udeze Chemile </span>
                        <span className="widgetSmUserTitle">BlockChain</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="./assets/image1.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Udeze Fantasi</span>
                        <span className="widgetSmUserTitle">Enviromentalist</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
