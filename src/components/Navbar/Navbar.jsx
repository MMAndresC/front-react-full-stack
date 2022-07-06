import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/auth/auth.actions';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const navigate = useNavigate();
    const goClientZone = () => navigate('/');
    return(
        <nav>
            <Link to='/'>Home</Link>
            { !user &&
                <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </>
            }
            { user && 
                <button onClick={() => dispatch(logoutUser(goClientZone))}>Logout</button>
            }
        </nav>
    );
}

export default Navbar;