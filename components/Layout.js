import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pb-10 mt-20">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
