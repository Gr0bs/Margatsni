import '../styles/sidebar.scss'
import Sticky from 'react-sticky-el'
import Profile from './Profile'
import Suggestions from './Suggestions'
import Footer from './Footer'

const Sidebar = () => {
    return ( 
        <Sticky topOffset={-80}>
            <div className="sidebar">
                <Profile 
                    username='Grob' 
                    caption='Grob Dev' 
                    urlText='Switch' 
                    iconSize='big' 
                    image='https://i.pravatar.cc/150?img=9' 
                />
                <Suggestions />
                <Footer />
            </div>
        </Sticky>
     );
}
 
export default Sidebar;