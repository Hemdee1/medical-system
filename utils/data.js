import json from "../hospitalsData.json";

export const records = [
  {
    title: "Consultation",
    info: "Consultation with Dr. Ahmed Mohammed",
    date: "25 March, 2023",
    color: "bg-slate-300",
  },
  {
    title: "Surgery",
    info: "Retinal detachment surgery operated by",
    date: "2 March, 2023",
    color: "bg-yellow-200",
  },
  {
    title: "Surgery",
    info: "X ray reports",
    date: "8 February, 2023",
    color: "bg-green-300",
  },
];

export const hospitalList = {
  hospitals: [
    json.datas[0].hospitals[1],
    json.datas[1].hospitals[3],
    json.datas[2].hospitals[4],
    json.datas[3].hospitals[1],
    json.datas[4].hospitals[1],
  ],
};

export const doctors = [
  {
    url: "https://www.statnews.com/wp-content/uploads/2021/04/AdobeStock_212196263-645x645.jpeg",
    name: "Daniel Johnson",
    role: "Medicine",
  },
  {
    url: "https://www.aoa.org/AOA/Images/Patients/Doctor_AdobeStock_330052573.jpeg",
    name: "Rose Davies",
    role: "Paediatrics",
  },
  {
    url: "https://img.freepik.com/premium-photo/your-health-is-important-me-shot-handsome-young-doctor-standing-alone-his-clinic_590464-58132.jpg",
    name: "Thompson Paul",
    role: "Orthopaedics",
  },
  {
    url: "https://onedoctor.app/images/rectangle-8.png",
    name: "Wadia Abdullahi",
    role: "Neurology",
  },
];
