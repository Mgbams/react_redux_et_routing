import { Link } from 'react-router-dom';

const Header = () => {
    return ( <div className='header'>
        <Link to='/'>Home</Link><br />
        <Link to='/apropos'>Apropos</Link><br />
        <Link to='/exercise'>Exercise Life Cycle component</Link><br />
        <Link to='/contact'>Contactez-nous</Link><br />
        <Link to='/user/:userId'>Details</Link><br />
    </div> );
}
 
export default Header;