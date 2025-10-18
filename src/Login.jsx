import { useState } from "react";
import axios from "axios";
import { setUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      console.log("Submitting...");
      const res = await axios.post(
        "http://localhost:3000/login",
        { email, password },
        { withCredentials: true }
      );
      console.log("Response:", res.data);
      setUser(res.data);
      return navigate("/");

    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title flex justify-center">Login</h2>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg">Email</legend>
            <input
              type="text"
              className="input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg">Password</legend>
            <input
              type="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>

          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
