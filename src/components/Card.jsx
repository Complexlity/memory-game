import fighterGirl from '../assets/fighter-girl.jpg'

const Cards = () => {
    return ( 
        <div className="layout-grid grid p-4">
            <Card />
        </div>
     );
}
 
export default Cards;


const Card = () => {
    return ( 
        <div className="card-grid w-[12rem] h-[16rem] grid  bg-red-400 p-2 rounded-2xl overflow-hidden gap-2">
            <div className='rounded-2xl overflow-hidden'><img className="object-cover h-[12rem] w-full" src={fighterGirl} alt="fighter" /></div>
            <p className='text-center bg-green-300 grid items-center'><span>Fighter Girl</span></p>
        </div>
     );
}
 
// export default Card;