import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { registerUser } from '../../redux/auth/auth.actions';

const Register = () => {
    const { register, handleSubmit, formState:{errors} } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (formData) => {
        console.log(formData);
        const goClientZone = () => navigate('/');
        dispatch(registerUser(goClientZone, formData));
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <p>Email</p>
                <input type="text" name="email" {...register('email', { 
                    required: "Please, enter a mail",
                    pattern: {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        message: "Wrong format mail"
                    } 
                })}/>
                {errors.email && errors.email.type === 'required' && <span>{errors.email.message}</span>}          
                {errors.email && errors.email.type === 'pattern' && <span>{errors.email.message}</span>}
            </label>

            <label>
                <p>Password</p>
                <input type="password" name="password" {...register('password', { 
                    required: "Please, enter password",
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                        message: "Wrong format password"
                    } 
                })}/>
                {errors.password && errors.password.type === 'required' && <span>{errors.password.message}</span>}          
                {errors.password && errors.password.type === 'pattern' && <span>{errors.password.message}</span>}
            </label>

            <label>
                <p>Name</p>
                <input type="text" name="name" {...register('name', {required: "Please, enter name" })}/>
                {errors.name && errors.name.type === 'required' && <span>{errors.name.message}</span>}          
            </label>
            <label>
                <p>Phone</p>
                <input type="text" name="phone" {...register('phone', { 
                    required: "Please, enter phone",
                    pattern: {
                        value: /^\d{9}$/,
                        message: "Wrong format phone"
                    }
                })}/>
                {errors.phone && errors.phone.type === 'required' && <span>{errors.phone.message}</span>}          
                {errors.phone && errors.phone.type === 'pattern' && <span>{errors.phone.message}</span>}
            </label>
            <button>Log In</button>
        </form>
    );
}

export default Register;