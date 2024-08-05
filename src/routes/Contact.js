import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import AboutImg from "../assets/img12.jpg";
import Footer from "../component/Footer";
import ContactForm from "../component/ContactForm";

const Contact = () => {
    return (
      <div>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroimg={AboutImg}
        title=" Contact"
        btnClass="hide  "

        />
        <ContactForm/>
        
        <Footer/>
      </div>
    );
  };
export default Contact;