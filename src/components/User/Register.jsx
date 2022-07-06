import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { registerUser } from '../../redux/auth/auth.actions';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (formData) => {
        const goClientZone = () => navigate('/');
        dispatch(registerUser(goClientZone, formData));
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <p>Email</p>
                <input type="text" name="email" {...register('email')}/>
            </label>
            <label>
                <p>Password</p>
                <input type="password" name="email" {...register('password')}/>
            </label>
            <button>Log In</button>
        </form>
    );
}

export default Register;