import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {

  /* signInUser functionality start  */
  const { signInUser } = use(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
    .then((getUser) => {
      console.log(getUser.user);
      e.target.reset();
    })
    .catch((error) => {
      console.log(error);   
    })
  }
  /* signInUser functionality end  */

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <h1 className="text-yellow-500">Login now</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            {/* from */}
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                {/* Email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                />

                {/* password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>

            <p>
              Don't have any account?
              <Link className="text-blue-500" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
