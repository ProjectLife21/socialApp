import { Link } from "react-router-dom";

// components
import { InputRow, Button } from "../components";

const RegisterPage = () => {
  return (
    <form className="card-body">
      <InputRow
        type="text"
        label="User name"
        placeholder="username"
        name="username"
      />
      <InputRow type="email" label="Email" placeholder="email" name="email" />
      <InputRow
        type="password"
        label="Password"
        placeholder="password"
        name="password"
      />
      <InputRow
        type="password"
        label="Repet password"
        placeholder="repeat password"
        name="repeat_password"
      />
      <div className="form-control mt-6">
        <Button classProps="btn btn-primary" text="Sign Up" type="submit" />
      </div>
      <div className="flex justify-center">
        <Link
          to="/login"
          className="bg-green-600 text-white w-[12rem] px-2 rounded-md py-2 text-center transition-all hover:bg-green-500"
        >
          Log into Account
        </Link>
      </div>
    </form>
  );
};
export default RegisterPage;
