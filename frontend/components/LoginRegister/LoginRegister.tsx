import React, { useState } from "react";
import Login from "./Login";
import Image from "next/image";
import Register from "./Register";

function LoginRegister(props) {
  const [showLogin, setShowLogin] = useState(true);

  function togglePage() {
    setShowLogin((prev) => !prev);
  }

  const imageLink =
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  return (
    <div
      className="flex flex-row bg-gray-800 h-screen w-screen justify-center items-center m-0 relative"
      //   style={{ backgroundImage: `url(${imageLink})` }}
    >
      <div className="w-6/12 rounded-md bg-gray-600">
        {showLogin ? (
          <Login
            togglePage={togglePage}
            toggleLoggedIn={props.toggleLoggedIn}
          />
        ) : (
          <Register
            togglePage={togglePage}
            toggleLoggedIn={props.toggleLoggedIn}
          />
        )}
      </div>
    </div>
  );
}

export default LoginRegister;
