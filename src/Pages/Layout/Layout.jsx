import Topnav from "../../Components/Topnav/Topnav";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
const Layout = ({ children }) => {
  return (
    <div>
      <Topnav />
      <Banner />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
