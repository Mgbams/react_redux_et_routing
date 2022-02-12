import { useParams } from "react-router";

const Details = () => {
    const { userId } = useParams();

    return ( <div className='details'>
        <h2>Je récupère mon id: {userId}</h2>
    </div> );
}
 
export default Details;