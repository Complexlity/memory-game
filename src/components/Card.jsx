import fighterGirl from '../assets/fighter-girl.jpg'

const Card = () => {
    return ( 
        <div className="card-grid w-[14rem] h-[16rem] grid  bg-red-400 p-2 rounded-t-3xl rounded-b-2xl overflow-hidden bottom">
            <div className='rounded-2xl overflow-hidden'><img className="object-cover h-[12rem] w-full" src={fighterGirl} alt="fighter" /></div>
            <p className='text-center text-white font-semibold text-2xl grid items-center'><span>Fighter Girl</span></p>
        </div>
     );
}
 
export default Card;