import TextCard from "../components/text-card";
import ImageCard from "../components/image-card";

function Home() {
    // const cards = [...Array(30)].map((_, i) => (
    //     <TextCard key={i} title={"Hello, I'm Atul"} text={"New here? Welcome!"}/>
    // ));

    return <div className="body">
        <ImageCard
            src={'https://media.licdn.com/dms/image/D4E03AQHSWva2wjpnQQ/profile-displayphoto-shrink_800_800/0/1674587538320?e=1681948800&v=beta&t=YhMyqEWauXXgx0jkfJkDe_FjLXZuWy291nzuxuiMLHw'}
            alt={'my-face'}> </ImageCard>
        <TextCard id={'profile'} title={"Profile"} text={"I enjoy reading new books, writing my own short stories, and listening to audiobooks whilst on-the-run. Well, no - that sounds sinister, whilst running is what I meant. And gyming. Is that a word? ...I don't think so. Oh well, It is now! Shakespeare just created words, no reason I can't. Gyming is now a word!"}/>
        <TextCard id={'status'} title={"Status"} text={`Oh, I also have a BSc in CompSci from QM, and am currently working at AND Digital as a Product Developer, primarily using Node/React. \n\n\n Github : github.com/atulghandhi`}/>
        <TextCard id={'work-exp'} title={"Work Experience"} text={"Oh, I also have a BSc in CompSci from QM, and am currently working at AND Digital as a Product Developer, primarily using Node/React. Github : github.com/atulghandhi"}/>
        <TextCard id={'edu'} title={"Qualifications"} text={"Oh, I also have a BSc in CompSci from QM, and am currently working at AND Digital as a Product Developer, primarily using Node/React. Github : github.com/atulghandhi"}/>
    </div>;
}

export default Home;
