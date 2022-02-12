import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";
import { Cake } from '@mui/icons-material';
import Button from '@mui/material/Button';

const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();

    return ( 
      <div className="hooksCakeContainer">
            <h2>Number of cakes - {numOfCakes }</h2>
            <Button variant="outlined" color="success" onClick={() => dispatch(buyCake())} endIcon={<Cake />}>Buy cake</Button>
      </div> 
    );
}
 
export default HooksCakeContainer;