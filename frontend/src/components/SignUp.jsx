import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const somethinToSave = false;
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords don't match");
    }

    try {
      setError("");
      setLoading(true);
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  };

  return (
    <section>
      <h2>Sign up</h2>
      {error && <h2>error}</h2>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>Email</label>
          <input type="email" required ref={emailRef} />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <input type="password" required ref={passwordRef} />
        </fieldset>
        <fieldset>
          <label>Password Confirm</label>
          <input type="password" required ref={passwordConfirmRef} />
        </fieldset>
        <button disabled={loading} type="submit">
          Sign up
        </button>
      </form>
      <div>
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </section>
  );
};
