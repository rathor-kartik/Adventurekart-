import Destionation from "../component/Destination" ;
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Trip from"../component/Trip";
import Footer from "../component/Footer";


const Home = () => {
    return (
      <div>
        <Navbar/>
        
        <Hero
        cName="Hero"
        heroimg="https://images.unsplash.com/photo-1719248909240-0b0a1c12bdd5?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Your Journey your story"
        text="Let's Begin A New Journey, That's Never Stopped!!!! "
        btnText="Travel plan"
        url="/"
        btnClass="show  "

        />

        <Destionation/>
        <Trip/>
        <Footer/>
        

      </div>
    );
  };
export default Home;