import { useEffect, useRef, useState } from "react";
import CircleIcon from "../components/icons/circleIcons";
import { SignUp } from "../API Requests/user";
import { useAppContext } from "../context/context";
import { useRouter } from "next/router";

const Signup = () => {
  const formRef = useRef();
  const { user, setUser } = useAppContext();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const route = useRouter();

  useEffect(() => {
    if (user) route.replace("/profile/dashboard");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const firstName = formRef.current.firstName.value.trim();
    const lastName = formRef.current.lastName.value.trim();
    const email = formRef.current.email.value.trim();
    const password = formRef.current.password.value.trim();

    if (!firstName || !lastName || !email || !password) return;

    if (password.length < 6)
      return setError("Password must be 6 characters long!");

    // signup with data
    try {
      setError("");
      setLoading(true);
      const data = await SignUp({ email, firstName, lastName, password });

      setUser(data);
      // route.replace("/profile/dashboard");
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex h-screen overflow-hidden">
      <div className="relative flex items-center justify-center">
        <span className="font-Caudex z-10 ml-20 w-[300px] hidden lg:block">
          <h3 className="text-secondary font-bold text-[40px]">Welcome</h3>
          <p className="font-medium font-OpenSans">
            We are glad to see you! Please fill the form to create your account.
          </p>
        </span>
        <span className="absolute -left-[450px] sm:-left-64 lg:left-0 top-0">
          <CircleIcon />
        </span>
      </div>
      <form
        className="z-10 flex flex-col items-center justify-center w-full px-5 ml-auto sm:px-20 lg:items-start lg:w-1/2"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <h1 className="font-Caudex font-bold text-[40px] text-primary uppercase">
          Signup
        </h1>
        <div className="mt-10">
          <label
            htmlFor="firstName"
            className="block font-medium font-OpenSans"
          >
            First Name:
          </label>
          <input
            required
            type="text"
            name="firstName"
            className="px-4 py-2 bg-white border-gray-200 border-2 rounded-xl mt-1 w-[320px] max-w-full"
            placeholder="Enter your first name"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="lastName" className="block font-medium font-OpenSans">
            Last Name:
          </label>
          <input
            required
            type="text"
            name="lastName"
            className="px-4 py-2 bg-white border-gray-200 border-2 rounded-xl mt-1 w-[320px] max-w-full"
            placeholder="Enter your last name"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="email" className="block font-medium font-OpenSans">
            Email:
          </label>
          <input
            required
            type="email"
            name="email"
            className="px-4 py-2 bg-white border-gray-200 border-2 rounded-xl mt-1 w-[320px] max-w-full"
            placeholder="Enter your email"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="password" className="block font-medium font-OpenSans">
            Password:
          </label>
          <input
            required
            type="password"
            name="password"
            className="px-4 py-2 bg-white border-gray-200 border-2 rounded-xl mt-1 w-[320px] max-w-full"
            placeholder="Enter your password"
          />
        </div>
        {error && <p className="mt-2 font-medium text-red-500">{error}</p>}
        <button className="grid w-40 h-10 px-8 place-items-center btn">
          {loading ? <span className="btn-loader"></span> : "Signup"}
        </button>
      </form>
    </main>
  );
};

export default Signup;
