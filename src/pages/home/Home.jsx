import Featured from "../../components/Featured/Featured";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MailList from "../../components/MailList/MailList";
import Navbar from "../../components/Navbar/Navbar";
import PropertyList from "../../components/PropertyList/PropertyList";
import Hotel from "../hotel/Hotel";
import "./Home.scss";

export const Home = () => {
   return (
      <div>
         <Navbar />
         <Header />
         <div className="homeContainer">
            <Featured />
            <h1 className="homeTitle">Nach Unterkunftsart suchen</h1>
            <PropertyList />
            <h1 className="homeTitle">Deutschland entdecken</h1>
            <FeaturedProperties />
            <MailList />
            <Footer />
         </div>
         {/* <Hotel /> */}
      </div>
   );
};
