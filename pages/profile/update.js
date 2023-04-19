import { useEffect, useRef, useState } from "react";
import ProfileLayout from "../../components/ProfileLayout";
import { FaUser } from "react-icons/fa";
import { useAppContext } from "../../context/context";
import states from "../../utils/states";
import { formatUpdateInput } from "../../utils/formatUpdateInput";
import { formatUpdateInputData } from "../../utils/formatUpdateInputData";
import { UpdateProfile } from "../../API Requests/user";
import { useRouter } from "next/router";

const Update = () => {
  const formRef = useRef();
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useAppContext();
  const route = useRouter();

  useEffect(() => {
    if (!user) return;

    formatUpdateInput(formRef, user);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = formatUpdateInputData(formRef, user, img);

    try {
      setLoading(true);

      const data = await UpdateProfile(userData);
      setUser(data);

      route.push("/profile");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleImg = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result);
    };
  };

  return (
    <ProfileLayout>
      <main className="flex flex-col items-center justify-center w-full py-10">
        <h2 className="text-2xl font-semibold sm:text-4xl font-Caudex text-primary">
          Update Profile
        </h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col w-full gap-5 px-5 mt-10 sm:px-20"
        >
          <div className="flex items-center justify-center">
            <div className="w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] grid place-items-center mb-5 rounded-full border-primary border-2 relative overflow-hidden">
              {user?.img || img ? (
                <img
                  src={img ? img : user?.img}
                  alt="User's Image"
                  className="object-cover w-full h-full"
                />
              ) : (
                <FaUser className="text-6xl" />
              )}
              <input
                type="file"
                name="img"
                id="img"
                onChange={handleImg}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between w-full gap-5 sm:flex-row">
            <article className="w-full">
              <label
                htmlFor="firstName"
                className="block font-medium font-OpenSans"
              >
                FirstName:
              </label>
              <input
                required
                type="text"
                name="firstName"
                className="w-full px-4 py-2 mt-1 font-medium tracking-wide bg-white border-2 border-gray-200 rounded-xl outline-primary"
              />
            </article>
            <article className="w-full">
              <label
                htmlFor="lastName"
                className="block font-medium font-OpenSans"
              >
                LastName:
              </label>
              <input
                required
                type="text"
                name="lastName"
                className="w-full px-4 py-2 mt-1 font-medium tracking-wide bg-white border-2 border-gray-200 rounded-xl outline-primary"
              />
            </article>
          </div>
          <div className="flex flex-col justify-between w-full gap-5 sm:flex-row">
            <article className="w-full">
              <label
                htmlFor="email"
                className="block font-medium font-OpenSans"
              >
                Email:
              </label>
              <input
                required
                type="email"
                name="email"
                className="w-full px-4 py-2 mt-1 font-medium tracking-wide bg-white border-2 border-gray-200 rounded-xl outline-primary"
              />
            </article>
            <article className="w-full">
              <label
                htmlFor="mobileNo"
                className="block font-medium font-OpenSans"
              >
                Mobile No:
              </label>
              <input
                required
                type="tel"
                name="mobileNo"
                className="w-full px-4 py-2 mt-1 font-medium tracking-wide bg-white border-2 border-gray-200 rounded-xl outline-primary"
              />
            </article>
          </div>
          <div className="flex flex-col justify-between w-full gap-5 sm:flex-row">
            <article className="w-full">
              <label
                htmlFor="dateOfBirth"
                className="block font-medium font-OpenSans"
              >
                Date Of Birth:
              </label>
              <input
                required
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                className="w-full px-4 py-2 mt-1 font-medium tracking-wide bg-white border-2 border-gray-200 rounded-xl outline-primary"
              />
            </article>
            <article className="w-full">
              <label
                htmlFor="gender"
                className="block font-medium font-OpenSans"
              >
                Gender:
              </label>
              <select
                required
                name="gender"
                id="gender"
                className="w-full px-4 py-2 mt-1 font-medium tracking-wide bg-white border-2 border-gray-200 rounded-xl outline-primary"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </article>
          </div>
          <div className="flex flex-col justify-between w-full gap-5 sm:flex-row">
            <article className="w-full">
              <label
                htmlFor="state"
                className="block font-medium font-OpenSans"
              >
                State:
              </label>
              <select
                required
                name="state"
                id="state"
                className="w-full px-4 py-2 mt-1 font-medium tracking-wide bg-white border-2 border-gray-200 rounded-xl outline-primary"
              >
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </article>
            <article className="w-full">
              <label
                htmlFor="address"
                className="block font-medium font-OpenSans"
              >
                Address:
              </label>
              <input
                required
                type="text"
                name="address"
                className="w-full px-4 py-2 mt-1 font-medium tracking-wide bg-white border-2 border-gray-200 rounded-xl outline-primary"
              />
            </article>
          </div>
          <div className="flex flex-col justify-between w-full gap-5 sm:flex-row">
            <article className="w-full">
              <label
                htmlFor="height"
                className="block font-medium font-OpenSans"
              >
                Height (ft):
              </label>
              <input
                required
                type="number"
                name="height"
                className="w-full px-4 py-2 mt-1 font-medium tracking-wide bg-white border-2 border-gray-200 rounded-xl outline-primary"
              />
            </article>
            <article className="w-full">
              <label
                htmlFor="weight"
                className="block font-medium font-OpenSans"
              >
                Weight (kg):
              </label>
              <input
                required
                type="number"
                name="weight"
                className="w-full px-4 py-2 mt-1 font-medium tracking-wide bg-white border-2 border-gray-200 rounded-xl outline-primary"
              />
            </article>
          </div>
          <div className="flex flex-col justify-between w-full gap-5 sm:flex-row">
            <article className="w-full">
              <label
                htmlFor="bloodGroup"
                className="block font-medium font-OpenSans"
              >
                Blood Group:
              </label>
              <input
                required
                type="text"
                name="bloodGroup"
                placeholder="e.g B+"
                className="w-full px-4 py-2 mt-1 font-medium tracking-wide bg-white border-2 border-gray-200 rounded-xl outline-primary"
              />
            </article>
            <article className="w-full">
              <label
                htmlFor="allergies"
                className="block font-medium font-OpenSans"
              >
                Allergies:
              </label>
              <input
                required
                type="text"
                name="allergies"
                className="w-full px-4 py-2 mt-1 font-medium tracking-wide bg-white border-2 border-gray-200 rounded-xl outline-primary"
                placeholder="comma denoted e.g milk, egg, fur"
              />
            </article>
          </div>

          <button className="grid w-64 h-10 px-8 mx-auto place-items-center btn">
            {loading ? <span className="btn-loader"></span> : "Update Profile"}
          </button>
        </form>
      </main>
    </ProfileLayout>
  );
};

export default Update;
