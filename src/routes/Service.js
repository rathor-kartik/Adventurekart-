import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import AboutImg from "../assets/img13.jpg";
import Footer from "../component/Footer";
import Trip from"../component/Trip";

const Service = () => {
    return (
      <div>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroimg={AboutImg}
        title=" Service"
        btnClass="hide  "

        />
        <Trip/>
        <Footer/>
      </div>
    );
  };
export default Service;