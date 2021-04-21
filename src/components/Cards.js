import '../styles/cards.scss'
import Stories from './Stories'
import Card from './Card'

const Cards = () => {
    const commentsOne=[
        {
            user: "Dumbledord",
            text: "This is like a magic trip !",
            id: 1,
        },
        {
            user: "Gandalf",
            text: "What the lord could think about that ?",
            id: 2
        },
        {
            user: "Ryu",
            text: "My hadoken ! ",
            id: 3
        }
    ]

    const commentsTwo=[
        {
            user: "Mario",
            text:" Waaoohhh",
            id: 4
        }
    ]

    const commentsThree = [
        {
            user: "Goultard",
            text: "Awesome picture !",
            id: 5
        }
    ]


    return ( 
        <div className="cards">
            <Stories />

            <Card username="Harry Potter" storyBorder={true} image="https://picsum.photos/800/800" comments={commentsOne} likedByText="Dumbledor" likedByNumber={2000} hours={3} />
            <Card username="Ryu" storyBorder={false} image="https://picsum.photos/800/800" comments={commentsTwo} likedByText="Akuma" likedByNumber={50} hours={10} />
            <Card username="Frodo" storyBorder={true} image="https://picsum.photos/800/800" comments={commentsThree} likedByText="Gollum" likedByNumber={60} hours={19} />
            <Card username="Sardine" storyBorder={true} image="https://picsum.photos/800/800" comments={commentsTwo} likedByText="Pti Lulu" likedByNumber={5} hours={3} />
            <Card username="Chandler" storyBorder={false} image="https://picsum.photos/800/800" comments={commentsOne} likedByText="Joey Tribianni" likedByNumber={4} hours={1} />
        </div>
     );
}

export default Cards;