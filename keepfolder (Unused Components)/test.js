import { Login, getLoggedInUser } from "../API Requests/user";

const Test = () => {
  const handleLogin = async () => {
    const data = {
      email: "hemdee@gmail.com",
      password: "hemdee",
    };

    try {
      const user = await Login(data);

      console.log(user);
    } catch (error) {
      console.log(error?.response.data.error);
    }
  };

  const handleAutoLogin = async () => {
    try {
      const user = await getLoggedInUser();
      console.log(user);
    } catch (error) {
      console.log(error?.response.data.error);
    }
  };

  return (
    <div>
      <h1>Test page</h1>
      <button onClick={handleLogin}>Login</button>
      <br />
      <button onClick={handleAutoLogin}>AutoLogin</button>
    </div>
  );
};

export default Test;
