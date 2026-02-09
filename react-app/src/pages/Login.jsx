import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setError("All fields are required");
      return;
    }
    if (!email.includes("@")) {
      setError("Enter a valid email");
      return;
    }

    // Get all users from localStorage or empty array
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user exists
    const existingUser = storedUsers.find(
      (user) => user.email === email
    );

    if (existingUser) {
      // User exists → check password
      if (existingUser.password === password) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/jobs");
      } else {
        setError("Incorrect email or password");
      }
    } else {
      // First-time user → register automatically
      const newUser = { email, password };
      storedUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(storedUsers));
      localStorage.setItem("isLoggedIn", "true");
      navigate("/jobs");
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Welcome Back 👋</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
