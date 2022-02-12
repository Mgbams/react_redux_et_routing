import { buyCake } from '../redux';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import { Cake } from '@mui/icons-material';

const CakeContainer = (props) => {
    return ( 
        <div className="cakeContainer">
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <Button variant="contained" onClick={props.buyCake} endIcon={<Cake />}>Buy Cakes</Button>
        </div>
     );
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);