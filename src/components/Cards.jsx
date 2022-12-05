import Card from './Card';
import naruto from '../assets/naruto.jpg'
import aang from '../assets/aang.jpg'
import alita from '../assets/alita.jpg'
import benTen from '../assets/ben10.jpg'
import dLuff from '../assets/d-luff.jpg'
import optimusPrime from '../assets/optimus-prime.jpg'
import woody from '../assets/woody.jpg'
import fighterGirl from '../assets/fighter-girl.jpg'

const Cards = () => {
    return ( 
        <div className="grid layout-grid gap-4 p-4">
            <Card title='Naruto' avatar={naruto} />
            <Card title='Aang' avatar={aang}/>
            <Card title='Alita' avatar={alita}/>
            <Card title='Ben 10' avatar={benTen}/>
            <Card title='D Luffy' avatar={dLuff}/>
            <Card title='Optimus Prime' avatar={optimusPrime}/>
            <Card title='Woody' avatar={woody}/>
            <Card title='fighterGirl' avatar={fighterGirl}/>
        </div>
     );
}
 
export default Cards;
