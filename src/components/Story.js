import '../styles/story.scss'
import ProfileIcon from './ProfileIcon'
import users from '../data/users'

const Story = () => {

    return ( 
        <div className="story">
            <ProfileIcon iconSize='big' storyBorder={true} />
        </div>
     );
}

 
export default Story;