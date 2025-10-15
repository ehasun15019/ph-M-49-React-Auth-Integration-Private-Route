import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase/firebase.config";


const Register = () => {

    /* import AuthContext with authInfo */
    const {createUser} = use(AuthContext);
    
    
    /* registration functionality start */
    const newHandleRegister = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      createUser(email, password)
      .then((newUser) => {
        console.log(newUser)
      })
      .catch((error) => {
        console.log(error)
      })
    }
    /* registration functionality end */

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <h1 className="text-yellow-500">Register now</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            {/* from */}
            <form onSubmit={newHandleRegister}>
              <fieldset className="fieldset">
                {/* name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Name"
                  name="name"
                />

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
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>

            <p>
              Already have an account?{" "}
              <Link className="text-blue-500" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
