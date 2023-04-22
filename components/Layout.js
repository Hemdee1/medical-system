import Footer from "./Footer2";
import Header from "./Header2";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mt-20">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
