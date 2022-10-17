import React, { useState } from "react";

function Register(props) {
  const [creds, setCreds] = useState({ name: "", email: "", password: "" });
  const host = "http://localhost:13712/api/auth/createUser";
  async function handleRegister() {
    console.log({ creds });
    try {
      const response = await fetch(host, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: creds.name,
          email: creds.email,
          password: creds.password,
        }),
      });

      const json = await response.json();

      if (json.error) {
        throw json.error;
      }

      if (json.authToken) {
        localStorage.setItem("authToken", json.authToken);
        props.toggleLoggedIn();
      }

      console.log(json);
    } catch (err) {
      console.log(err);
      alert("Invalid credentials");
    }
  }

  function handleChange(e) {
    setCreds((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <div className="flex flex-col h-full justify-center p-2 gap-2">
      <p>Signup to store your notes</p>
      <input
        type="text"
        name="name"
        placeholder="Enter your ful name..."
        required
        onChange={handleChange}
        autoComplete="off"
      />
      <input
        type="text"
        name="email"
        placeholder="Enter email..."
        required
        onChange={handleChange}
        autoComplete="off"
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password..."
        required
        onChange={handleChange}
      />

      <p>Already have an account?</p>
      <p>
        Go to{" "}
        <span
          className="cursor-pointer text-red-200"
          onClick={() => {
            props.togglePage();
          }}
        >
          Login
        </span>
      </p>

      <button
        onClick={handleRegister}
        className="bg-gray-800 text-gray-200 py-1"
      >
        Register
      </button>
    </div>
  );
}

export default Register;
