import { buyIceCream } from '../redux';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import { Icecream } from '@mui/icons-material';

const IceCreamContainer = (props) => {
    return ( 
        <div className="iceCreamContainer">
            <h2>Number of IceCreams - {props.numOfIceCreams}</h2>
            <Button variant="contained" onClick={props.buyIceCream} endIcon={<Icecream />}>Buy IceCreams</Button>
        </div>
     );
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);