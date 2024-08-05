import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import AboutImg from "../assets/1.jpg";
import Footer from "../component/Footer";
import AboutUs from "../component/AboutUs";

const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero
        cName="hero-mid"
        heroimg={AboutImg}
        title=" About"
        btnClass="hide"
      /> 
      
      <AboutUs/>
      <Footer/>
    </div>
  );
};




export default About; 