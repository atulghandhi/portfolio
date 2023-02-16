import TextCard from "../components/text-card";
import ImageCard from "../components/image-card";

function Home() {
    const cards = [...Array(30)].map((_, i) => (
        <TextCard key={i} title={"Hello, I'm Atul"} text={"New here? Welcome!"}/>
    ));

    return <div className="body">
        <ImageCard
            src={'https://media.licdn.com/dms/image/D4E03AQHSWva2wjpnQQ/profile-displayphoto-shrink_800_800/0/1674587538320?e=1681948800&v=beta&t=YhMyqEWauXXgx0jkfJkDe_FjLXZuWy291nzuxuiMLHw'}
            alt={'my-face'}> </ImageCard>
        {cards}
    </div>;
}

export default Home;
