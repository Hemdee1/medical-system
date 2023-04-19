import ProfileLayout from "../../components/ProfileLayout";
import { FaFilePdf, FaFile, FaDownload, FaEye } from "react-icons/fa";
const category = ["All", "Recent"];

const MedicalRecor = () => {
  return (
    <ProfileLayout>
      <main className="w-full px-5 pb-10">
        <div className="flex items-center justify-between gap-4 my-5 mb-10">
          <h2 className="text-2xl font-semibold sm:text-4xl font-Caudex text-primary">
            Medical records
          </h2>
          <div className="flex items-center gap-4">
            <label className="text-lg font-medium">Show:</label>
            <select
              name="show"
              id="show"
              className="px-4 py-2 font-medium tracking-wide text-white border-2 border-gray-200 rounded-md outline-primary bg-primary"
            >
              {category.map((cate, index) => (
                <option value={cate} key={index} className="capitalize">
                  {cate}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="relative flex flex-col gap-5">
          <span className="absolute top-0 h-full bg-gray-500 border border-gray-200 left-[93px] sm:left-[194px]"></span>
          <article className="flex items-start gap-4 sm:gap-10">
            <div className="text-sm sm:text-base w-[70px] sm:w-[140px] text-right">
              <h3 className="font-bold">25 March, 2023</h3>
              <h4 className="text-sm">11:45 AM</h4>
            </div>
            <div className="relative w-4 sm:w-7">
              <span className="absolute w-2 h-2 rounded-full sm:w-5 sm:h-5 bg-primary left-1 top-1"></span>
              <span className="absolute top-0 left-0 w-4 h-4 border-2 rounded-full sm:w-7 sm:h-7 border-primary"></span>
            </div>
            <div className="flex flex-col flex-1 gap-4 px-4 py-2 rounded-lg bg-slate-300 font-OpenSans">
              <h2 className="text-base font-medium sm:text-lg">Consultation</h2>
              <h3 className="text-sm sm:text-base">
                Consultation with Dr. Ahmed Mohammed
              </h3>
            </div>
          </article>

          <article className="flex items-start gap-4 sm:gap-10">
            <div className="text-sm sm:text-base w-[70px] sm:w-[140px] text-right">
              <h3 className="font-bold">2 March, 2023</h3>
              <h4 className="text-sm">1:15 PM</h4>
            </div>
            <div className="relative w-4 sm:w-7">
              <span className="absolute w-2 h-2 bg-red-500 rounded-full sm:w-5 sm:h-5 left-1 top-1"></span>
              <span className="absolute top-0 left-0 w-4 h-4 border-2 border-red-500 rounded-full sm:w-7 sm:h-7"></span>
            </div>
            <div className="flex flex-col flex-1 gap-4 px-4 py-2 bg-red-300 rounded-lg font-OpenSans">
              <h2 className="text-base font-medium sm:text-lg">Surgery</h2>
              <h3 className="text-sm text-gray-600 sm:text-base">
                Retinal detachment surgery operated by
              </h3>
              <div>
                <h3 className="text-sm sm:text-base">Dr. Johnson Layi</h3>
                <h3 className="text-sm sm:text-base">Dr. Adewuyi Alabi</h3>
              </div>
            </div>
          </article>

          <article className="flex items-start gap-4 sm:gap-10">
            <div className="text-sm sm:text-base w-[70px] sm:w-[140px] text-right">
              <h3 className="font-bold">28 February, 2023</h3>
              <h4 className="text-sm">9:00 AM</h4>
            </div>
            <div className="relative w-4 sm:w-7">
              <span className="absolute w-2 h-2 bg-yellow-500 rounded-full sm:w-5 sm:h-5 left-1 top-1"></span>
              <span className="absolute top-0 left-0 w-4 h-4 border-2 border-yellow-500 rounded-full sm:w-7 sm:h-7"></span>
            </div>
            <div className="flex flex-col flex-1 gap-4 px-4 py-2 bg-yellow-200 rounded-lg font-OpenSans">
              <h2 className="text-base font-medium sm:text-lg">Surgery</h2>
              <h3 className="text-sm text-gray-600 sm:text-base">
                X ray reports
              </h3>
              <div className="flex gap-4">
                <button>
                  <FaFilePdf size={30} className="text-slate-700" />
                </button>
                <button>
                  <FaFile size={30} className="text-slate-700" />
                </button>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="flex items-center gap-2 font-medium text-blue-600">
                  Download all files
                  <FaDownload />
                </button>
                <button className="flex items-center gap-2 font-medium text-blue-600">
                  View all files
                  <FaEye />
                </button>
              </div>
            </div>
          </article>

          <article className="flex items-start gap-4 sm:gap-10">
            <div className="text-sm sm:text-base w-[70px] sm:w-[140px] text-right">
              <h3 className="font-bold">18 February, 2023</h3>
              <h4 className="text-sm">10:45 AM</h4>
            </div>
            <div className="relative w-4 sm:w-7">
              <span className="absolute w-2 h-2 rounded-full sm:w-5 sm:h-5 bg-primary left-1 top-1"></span>
              <span className="absolute top-0 left-0 w-4 h-4 border-2 rounded-full sm:w-7 sm:h-7 border-primary"></span>
            </div>
            <div className="flex flex-col flex-1 gap-4 px-4 py-2 rounded-lg bg-slate-300 font-OpenSans">
              <h2 className="text-base font-medium sm:text-lg">Consultation</h2>
              <h3 className="text-sm sm:text-base">
                Consultation with Dr. Agus Lawrence
              </h3>
            </div>
          </article>

          <article className="flex items-start gap-4 sm:gap-10">
            <div className="text-sm sm:text-base w-[70px] sm:w-[140px] text-right">
              <h3 className="font-bold">6 February, 2023</h3>
              <h4 className="text-sm">3:00 PM</h4>
            </div>
            <div className="relative w-4 sm:w-7">
              <span className="absolute w-2 h-2 bg-red-500 rounded-full sm:w-5 sm:h-5 left-1 top-1"></span>
              <span className="absolute top-0 left-0 w-4 h-4 border-2 border-red-500 rounded-full sm:w-7 sm:h-7"></span>
            </div>
            <div className="flex flex-col flex-1 gap-4 px-4 py-2 bg-red-300 rounded-lg font-OpenSans">
              <h2 className="text-base font-medium sm:text-lg">Surgery</h2>
              <h3 className="text-sm text-gray-600 sm:text-base">
                Retinal detachment surgery operated by
              </h3>
              <div>
                <h3 className="text-sm sm:text-base">Dr. Johnson Layi</h3>
                <h3 className="text-sm sm:text-base">Dr. Adewuyi Alabi</h3>
              </div>
            </div>
          </article>

          <article className="flex items-start gap-4 sm:gap-10">
            <div className="text-sm sm:text-base w-[70px] sm:w-[140px] text-right">
              <h3 className="font-bold">28 January, 2023</h3>
              <h4 className="text-sm">9:00 AM</h4>
            </div>
            <div className="relative w-4 sm:w-7">
              <span className="absolute w-2 h-2 bg-yellow-500 rounded-full sm:w-5 sm:h-5 left-1 top-1"></span>
              <span className="absolute top-0 left-0 w-4 h-4 border-2 border-yellow-500 rounded-full sm:w-7 sm:h-7"></span>
            </div>
            <div className="flex flex-col flex-1 gap-4 px-4 py-2 bg-yellow-200 rounded-lg font-OpenSans">
              <h2 className="text-base font-medium sm:text-lg">Surgery</h2>
              <h3 className="text-sm text-gray-600 sm:text-base">
                X ray reports
              </h3>
              <div className="flex gap-4">
                <button>
                  <FaFilePdf size={30} className="text-slate-700" />
                </button>
                <button>
                  <FaFile size={30} className="text-slate-700" />
                </button>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="flex items-center gap-2 font-medium text-blue-600">
                  Download all files
                  <FaDownload />
                </button>
                <button className="flex items-center gap-2 font-medium text-blue-600">
                  View all files
                  <FaEye />
                </button>
              </div>
            </div>
          </article>
        </div>
      </main>
    </ProfileLayout>
  );
};

export default MedicalRecor;
