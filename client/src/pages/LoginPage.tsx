import { Link } from "react-router-dom";

// components
import { Button, InputRow } from "../components";

const LoginPage = () => {
  return (
    <form className="card-body">
      <InputRow type="email" label="Email" placeholder="email" name="email" />
      <InputRow
        type="password"
        label="Password"
        placeholder="password"
        name="password"
      />
      <div className="form-control mt-6">
        <Button classProps="btn btn-primary" text="Login" type="submit" />
      </div>
      <label className="flex justify-center label">
        <a href="#" className="label-text-alt link link-hover">
          Forgot password?
        </a>
      </label>
      <div className="flex justify-center">
        <Link
          to="/register"
          className="bg-green-600 text-white w-[12rem] px-2 rounded-md py-2 text-center transition-all hover:bg-green-500"
        >
          Create a New Account
        </Link>
      </div>
    </form>
  );
};
export default LoginPage;
