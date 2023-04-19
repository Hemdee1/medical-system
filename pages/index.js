// import Welcome from "../components/Welcome";
import Nav from "../components/Nav";
import Header from "../components/Header";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";
import Footer from "../components/Footer";



export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <Nav />
        <Header />
        <div className="bg-white">
          <SectionOne />
          <SectionFour />
          <SectionTwo />
          <SectionThree />
        </div>
        <Footer />
      </div>
    </>
  );
}
