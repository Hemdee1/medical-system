import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="px-5 md:px-20">
        <h1 className="py-10 text-2xl font-semibold text-center sm:text-4xl font-Caudex text-primary">
          About Us
        </h1>
        <p className="text-secondary font-OpenSans font-medium">
          Welcome to our medical system platform, designed to revolutionize the
          way healthcare is delivered to patients around the world. <br />
          <br />
          Our platform is built on the principles of convenience, accessibility,
          and affordability. We understand that healthcare can be complex and
          overwhelming, which is why we have created a system that simplifies
          the process for patients and healthcare providers alike.
          <br />
          <br />
          Our platform provides a range of services, including telemedicine
          consultations, online prescription refills, medical records
          management, and appointment scheduling. We also offer a comprehensive
          suite of wellness tools and resources to help patients manage their
          health and prevent future health issues.
          <br />
          <br />
          Our team of medical professionals and technology experts work
          tirelessly to ensure that our platform is user-friendly, secure, and
          reliable. We adhere to the highest standards of data privacy and
          security, and our platform is fully compliant with all relevant
          regulations and laws.
          <br />
          <br />
          At the heart of our platform is the belief that healthcare should be
          accessible to everyone, regardless of their location, income, or
          background. We are committed to breaking down barriers to healthcare
          and creating a world where everyone has access to quality, affordable
          healthcare.
          <br />
          <br />
          Thank you for choosing our medical system platform. We are honored to
          be your partner in healthcare.
        </p>
      </div>
    </Layout>
  );
};

export default About;
