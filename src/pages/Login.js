import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  //variables for log in
  const [email, setEmail] = useState("");

  return (
    <form className="login blocks">
      <div className="form-group">
        <label for="email">EMAIL </label>
        <input type="email" required />
      </div>
      <div className="form-group">
        <label for="password">PASSWORD</label>
        <input type="password" required />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;
