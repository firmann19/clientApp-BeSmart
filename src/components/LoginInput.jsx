import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  return (
    <form className="login-input">
      <input
        className="border border-black border-4"
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Email"
      />
      <input
        className="border border-black border-4"
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
      />
      <button
        className="w-full h-11 rounded-xl text-lg font-medium bg-secondary-color text-white gap-2"
        onClick={() => login({ email, password })}
      >
        Login
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
