// import Card from "../componants/text-card";
//
// function Home() {
//     return (
//         <div className={'body'}>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//             <Card title={'Hello, I\'m Atul'} text={'New here? welcome!'}/>
//         </div>
//     )
// }
//
// export default Home;

import Card from "../components/text-card";

function Home() {
        const cards = [...Array(30)].map((_, i) => (
            <Card key={i} title={"Hello, I'm Atul"} text={"New here? Welcome!"} />
        ));

        return <div className="body">{cards}</div>;
}
export default Home;
