import TextCard from "../components/text-card";
import ImageCard from "../components/image-card";

function Home() {
    const cards = [...Array(30)].map((_, i) => (
        <TextCard key={i} title={"Hello, I'm Atul"} text={"New here? Welcome!"}/>
    ));

    return <div className="body">
        <ImageCard
            src={'../resources/cartoon-id-pic.png'}
            alt={'my-face'}> </ImageCard>
        {cards}
    </div>;
}

export default Home;
