import '../styles/suggestions.scss'
import Profile from './Profile'

const Suggestions = () => {
    return (  
        <div className="suggestions">
            <div className="titleContainer">
                <div className="title">
                    Suggestions for you
                </div>
                <a href="/">See All</a>
            </div>

            <Profile caption='Followed by Zangief + 4 more' urlText='Follow' iconSize='medium' captionSize='small' storyBorder={false} />
            <Profile caption='Followed by Denis Brognard + 2 more' urlText='Follow' iconSize='medium' captionSize='small' storyBorder={false} />
            <Profile caption='Followed by You' urlText='Follow' iconSize='medium' captionSize='small' storyBorder={false} />
            <Profile caption='Followed by Dumbledord + 100 more' urlText='Follow' iconSize='medium' captionSize='small' storyBorder={false} />
        </div>
    );
}
 
export default Suggestions;