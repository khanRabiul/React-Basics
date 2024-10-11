import { useState } from "react";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const toggleLogin = () => {
    setLoggedIn(!isLoggedIn);
  };

  const handelLogin = () => {
    if (isLoggedIn) {
      console.log("User is logged in");
    } else {
      console.log("User is logged out");
    }
  };

  return (
    <>
      <div>
        <h2 className="text-3xl text-center mb-4">
          {isLoggedIn ? "User is logged in" : "User is not logged in"}
        </h2>

        <button
          className="bg-green-400 hover:bg-green-500 px-2 py-3 rounded-md mr-3"
          onClick={handelLogin}
        >
          Check Login
        </button>
        <button
          className="bg-green-400 hover:bg-green-500 px-2 py-3 rounded-md mr-3"
          onClick={toggleLogin}
        >
          {isLoggedIn ? "Log Out" : "Log in"}
        </button>
      </div>
    </>
  );
};

export default App;
