import '../styles/card.scss'
import Profile from './Profile'
import {ReactComponent as CardButton} from '../images/cardButton.svg'
import CardMenu from './CardMenu'
import Comment from './Comment'

const Card = (props) => {

    const {
        username,
        storyBorder,
        image,
        comments,
        likedByText,
        likeByNumber,
        hours
    } = props

    return ( 
        <div className="card">
            <header>
                <Profile username={username} iconSize="medium" storyBorder={storyBorder} />
                <CardButton className="cardButton"/>
            </header>
            <img className="cardImage" src={image} alt="card content" />
            <CardMenu />
            <div className="likedBy">
                <Profile iconSize="small" hideAccountName={true} />
                <span>
                    Liked by <strong>{likedByText}</strong> and <strong>{likeByNumber} others</strong>
                </span>
            </div>
            <div className="comments">
                {comments.map(comment => {
                    return(
                        <Comment 
                            key={comment.id}
                            accountName={comment.user}
                            comment={comment.text}
                        />
                    )
                })}
            </div>
            <div className="timePosted">{hours} HOURS AGO</div>
            <div className="addComment">
                <div className="commentText">Add a comment...</div>
                <div className="postText">POST</div>
            </div>
        </div>
     );
}
 
export default Card;