import json from "../hospitalsData.json";
import HospitalList from "../components/HospitalList";
import Layout from "../components/Layout";

const Hospital = () => {
  return (
    <Layout>
      <main className="px-3 pb-20 sm:px-10">
        <h1 className="py-10 text-2xl font-semibold text-center sm:text-4xl font-Caudex text-primary">
          List of Hospitals
        </h1>
        <div className="flex flex-col gap-10 sm:gap-20">
          {json.datas.map((data, index) => (
            <HospitalList key={index} data={data} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Hospital;
