import '../styles/menu.scss'
import { ReactComponent as Home } from "../images/home.svg"
import { ReactComponent as Inbox } from "../images/inbox.svg"
import { ReactComponent as Explore } from "../images/explore.svg"
import { ReactComponent as Notifications } from "../images/notification.svg"
import ProfileIcon from './ProfileIcon'

const Menu = () => {
    return ( 
        <div className="menu">
            <Home className="icon" />
            <Inbox className="icon" />
            <Explore className="icon" />
            <Notifications className="icon" />
            <ProfileIcon iconSize="small" image='https://i.pravatar.cc/150?img=9' storyBorder={true}/>
        </div>
     );
}
 
export default Menu;