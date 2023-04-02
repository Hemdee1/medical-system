import Welcome from "../components/Welcome";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h1 className="font-Caudex font-bold text-5xl text-primary">
        Medical Appointment System
      </h1>
      <Welcome />
    </div>
  );
}
