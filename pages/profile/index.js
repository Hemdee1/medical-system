import { FaUser } from "react-icons/fa";
import ProfileLayout from "../../components/ProfileLayout";
import Link from "next/link";
import { useAppContext } from "../../context/context";

const Profile = () => {
  const { user } = useAppContext();

  return (
    <ProfileLayout>
      <main className="flex flex-col items-center justify-center w-full py-10">
        <h2 className="text-2xl font-semibold sm:text-4xl font-Caudex text-primary">
          Profile
        </h2>
        <div className="flex flex-col w-full gap-5 px-5 mt-10 sm:gap-10 sm:px-20">
          <div className="flex items-center justify-center">
            <div className="w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] grid place-items-center mb-5 rounded-full border-primary border-2 relative overflow-hidden">
              {user?.img ? (
                <img
                  src={user?.img}
                  alt="User's Image"
                  className="object-cover w-full h-full"
                />
              ) : (
                <FaUser className="text-6xl" />
              )}
            </div>
          </div>
          <div className="flex flex-col justify-between w-full gap-5 sm:gap-10 sm:flex-row">
            <article className="w-full">
              <p className="mb-2 font-medium font-OpenSans">FirstName:</p>
              <h2 className="px-4 py-2 text-base font-medium tracking-wide text-gray-600 capitalize rounded-md sm:text-xl bg-slate-100 min-h-[40px]">
                {user?.firstName}
              </h2>
            </article>
            <article className="w-full">
              <p className="mb-2 font-medium font-OpenSans">LastName:</p>
              <h2 className="px-4 py-2 text-base font-medium tracking-wide text-gray-600 capitalize rounded-md sm:text-xl bg-slate-100 min-h-[40px]">
                {user?.lastName}
              </h2>
            </article>
          </div>
          <div className="flex flex-col justify-between w-full gap-5 sm:gap-10 sm:flex-row">
            <article className="w-full">
              <p className="mb-2 font-medium font-OpenSans">Email:</p>
              <h2 className="px-4 py-2 text-base font-medium tracking-wide text-gray-600 rounded-md sm:text-xl bg-slate-100 min-h-[40px]">
                {user?.email}
              </h2>
            </article>
            <article className="w-full">
              <p className="mb-2 font-medium font-OpenSans">Mobile No:</p>
              <h2 className="px-4 py-2 text-base font-medium tracking-wide text-gray-600 capitalize rounded-md sm:text-xl bg-slate-100 min-h-[40px]">
                {user?.mobileNo}
              </h2>
            </article>
          </div>
          <div className="flex flex-col justify-between w-full gap-5 sm:gap-10 sm:flex-row">
            <article className="w-full">
              <p className="mb-2 font-medium font-OpenSans">Date Of Birth:</p>
              <h2 className="px-4 py-2 text-base font-medium tracking-wide text-gray-600 capitalize rounded-md sm:text-xl bg-slate-100 min-h-[40px]">
                {user?.dateOfBirth}
              </h2>
            </article>
            <article className="w-full">
              <p className="mb-2 font-medium font-OpenSans">Gender:</p>
              <h2 className="px-4 py-2 text-base font-medium tracking-wide text-gray-600 capitalize rounded-md sm:text-xl bg-slate-100 min-h-[40px]">
                {user?.gender}
              </h2>
            </article>
          </div>
          <div className="flex flex-col justify-between w-full gap-5 sm:gap-10 sm:flex-row">
            <article className="w-full">
              <p className="mb-2 font-medium font-OpenSans">State:</p>
              <h2 className="px-4 py-2 text-base font-medium tracking-wide text-gray-600 capitalize rounded-md sm:text-xl bg-slate-100 min-h-[40px]">
                {user?.state}
              </h2>
            </article>
            <article className="w-full">
              <p className="mb-2 font-medium font-OpenSans">Address:</p>
              <h2 className="px-4 py-2 text-base font-medium tracking-wide text-gray-600 capitalize rounded-md sm:text-xl bg-slate-100 min-h-[40px]">
                {user?.address}
              </h2>
            </article>
          </div>
          <div className="flex flex-col justify-between w-full gap-5 sm:gap-10 sm:flex-row">
            <article className="w-full">
              <p className="mb-2 font-medium font-OpenSans">Height:</p>
              <h2 className="px-4 py-2 text-base font-medium tracking-wide text-gray-600 capitalize rounded-md sm:text-xl bg-slate-100 min-h-[40px]">
                {user?.height}
              </h2>
            </article>
            <article className="w-full">
              <p className="mb-2 font-medium font-OpenSans">Weight:</p>
              <h2 className="px-4 py-2 text-base font-medium tracking-wide text-gray-600 capitalize rounded-md sm:text-xl bg-slate-100 min-h-[40px]">
                {user?.weight}
              </h2>
            </article>
          </div>
          <div className="flex flex-col justify-between w-full gap-5 sm:gap-10 sm:flex-row">
            <article className="w-full">
              <p className="mb-2 font-medium font-OpenSans">Blood Group:</p>
              <h2 className="px-4 py-2 text-base font-medium tracking-wide text-gray-600 capitalize rounded-md sm:text-xl bg-slate-100 min-h-[40px]">
                {user?.bloodGroup}
              </h2>
            </article>
            <article className="w-full">
              <p className="mb-2 font-medium font-OpenSans">Allergies:</p>
              <div className="flex gap-2 px-4 py-2 text-base font-medium tracking-wide text-gray-600 capitalize rounded-md sm:text-xl bg-slate-100 min-h-[40px]">
                {user?.allergies.map((data, index) => (
                  <p key={index}>{data}</p>
                ))}
              </div>
            </article>
          </div>

          <Link href="/profile/update" className="mx-auto ">
            <button className="btn mt-0 w-[200px]">Edit Profile</button>
          </Link>
        </div>
      </main>
    </ProfileLayout>
  );
};

export default Profile;
