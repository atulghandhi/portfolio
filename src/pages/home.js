import TextCard from "../components/text-card";
import ImageCard from "../components/image-card";

function Home() {
    const cards = [...Array(30)].map((_, i) => (
        <TextCard key={i} title={"Hello, I'm Atul"} text={"New here? Welcome!"}/>
    ));

    return <div className="body"> <ImageCard src={'https://lh3.googleusercontent.com/jYvTmh_2nVegZhzsrjZe2xd8YjpxCtIL1E9ocQ3BOkCMY9TJD4mPXwudRSlVxIdDXLzAUEVvIFHRa7cmqCzYJ4CH0XqEiXroS2I8kRur'} alt={'moodboard'}/> {cards}</div>;
}

export default Home;
