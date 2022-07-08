import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../../redux/auth/auth.actions";
import "./User.scss";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    const goClientZone = () => navigate("/");
    dispatch(registerUser(goClientZone, formData));
  };

  return (
    <div className="Container">
      <h1 className="SectionTitle">REGISTER</h1>
      <div className="BigCard">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <span>Email</span>
            <input
              className="InputField"
              type="text"
              name="email"
              {...register("email")}
              required
            />
          </label>
          <label>
            <span>Password</span>
            <input
              className="InputField"
              type="password"
              name="email"
              {...register("password")}
              required
            />
          </label>
          <button className="PrimaryBtn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
