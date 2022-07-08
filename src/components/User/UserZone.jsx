import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editPersonalUser } from "../../redux/auth/auth.actions";

import './userZone.scss';

const UserZone = () => {

    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const { register, handleSubmit, getValues, setValue, formState: { errors } } = useForm();
    const { register: registerPersonal, setValue: setValuePersonal , handleSubmit: handleSubmitPersonal, formState: { errors:errors2 } } = useForm();
    const [visible, setVisible] = useState(false);
    const [disabled, setDisabled] = useState(true);    

    useEffect(() => {
        setValuePersonal('name', user.name);
        setValuePersonal('phone', user.phone);
        // eslint-disable-next-line
    }, [user.name, user.phone])


    const showToChangePassword = () => {
        if (!visible) {
            setVisible(true);   
        } else {
            setValue('password', '', { shouldDirty: true });
            setValue('password2', '', { shouldDirty: true });
            setVisible(false);
        }
    }

    const onSubmitPassword = (formData) => {
        const newPass = { _id: user._id, password: formData.password }
        dispatch(editPersonalUser(newPass));
    }

    const showToChangePersonal = () => {
        if (disabled) {
            setDisabled(false);
        } else {
            setValuePersonal('name', user.name, { shouldDirty: true });
            setValuePersonal('phone', user.phone, { shouldDirty: true });
            setDisabled(true);
        }
    }

    const onSubmitPersonal = (formData) => {
        const newData = { _id: user._id, name: formData.name, phone: formData.phone }
        dispatch(editPersonalUser(newData));
        setDisabled(true);
    }

    return (
        <div>
            <section className='personal-data'>
                <h2>Datos Personales</h2>
                <p>{user.email}</p>
                <form onSubmit={handleSubmit(onSubmitPassword)}>
                    <input type='password' name='password'
                        className={visible ? 'password-visible' : 'password-invisible'}
                        {...register('password', {
                            required: "Please, enter password",
                            pattern: {
                                // eslint-disable-next-line
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                                message: "Wrong format password"
                            }
                        })} />
                    <input type='password' name='password2'
                        className={visible ? 'password-visible' : 'password-invisible'}
                        {...register('password2', {
                            validate: {
                                equalToPassword: () => getValues('password') === getValues('password2')
                            }
                        })} />
                    {errors?.password2 && <p>Passwords are different</p>}
                    <button type='submit' className={visible ? 'password-visible' : 'password-invisible'}>Guardar cambios</button>
                </form>
                <button onClick={() => showToChangePassword()}>{visible ? 'Cancelar':'Editar password'}</button>

                <form onSubmit={handleSubmitPersonal(onSubmitPersonal)}>
                <p>Name</p>
                <input type='text' name='name'
                    disabled={disabled}
                    {...registerPersonal('name', {required: `Name can't be null`})}
                />
                {errors2?.name && <p>{errors2.name.message}</p>}
                <p>Phone</p>
                <input type='text' name='phone'
                    disabled={disabled}
                  {...registerPersonal('phone', {
                    required: "Please, enter phone",
                    pattern: {
                        value: /^\d{9}$/,
                        message: "Wrong format phone"
                    }
                  })}
                />
                {errors2?.phone && <p>{errors2.phone.message}</p>}
                <button type='submit' className={disabled ? 'password-invisible':'password-visible' }>Guardar cambios</button>
                </form>
                <button onClick={() => showToChangePersonal()}>{disabled ? 'Editar datos':'Cancelar' }</button>
            </section>
            <section className='history-data'>
                <h2>Historial</h2>
            </section>
        </div>
    );
}

export default UserZone;