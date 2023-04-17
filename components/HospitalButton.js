const HospitalButton = ({ selectedHospital, setSelectedHospital, data }) => {
  return (
    <button
      className={`relative overflow-hidden border-slate-800 min-w-[70px] sm:min-w-[112px] h-[70px] sm:h-[112px] rounded-xl sm:rounded-3xl duration-300 transition-all ${
        selectedHospital.name === data.name
          ? "scale-110 border-2"
          : "scale-100 border-none"
      }`}
      onClick={() => setSelectedHospital(data)}
    >
      <img
        // src="/image/Eyecare.png"
        src={data.image_url}
        alt="hospital"
        className="object-cover w-full h-full"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 h-7"></div>
      <h4 className="absolute w-16 overflow-hidden text-xs text-white sm:w-24 left-1 sm:left-2 bottom-1 whitespace-nowrap text-ellipsis">
        {data.name}
      </h4>
    </button>
  );
};

export default HospitalButton;
