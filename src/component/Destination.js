import Destionationdata from "./Destinationdata";
import "./Deststyles.css"
import gwalior1 from "../assets/1.jpg"
import gwalior2 from "../assets/3.jpg"
import gwalior3 from "../assets/8.jpg"
import gwalior4 from "../assets/10.jpg"

const Destionation =()=>{
    return(
        <div className="destination">
            <h1>Popular Destionation</h1>
            <p>Tours Gives you the Oppurtunity To see a Lot!! Within time Frame </p>
            
            <Destionationdata
            classname="first-des"
            heading="Gwalior, Madhya Pradesh"
            text="Madhya Pradesh is well known for its mighty forts, and the enthralling history is preserved in the walls of these grandeurs. Have a look at some of the stunning masterpieces, which are now the symbol of a bygone era and are part of India's rich historical & cultural treasures. The forts in Madhya Pradesh stand tall as testaments to the region's glorious past, offering a glimpse into the architectural marvels and strategic significance that defined that era."
            img1={gwalior1}
            img2={gwalior2}
            />

            <Destionationdata
            classname="first-des-reverse"
            heading="Dholpur,Rajeshthan"
            text=" MadhyaPradesh is well known for its mighty forts, and the enthralling history is preserved in the walls of these grandeurs. Have a look at some of the stunning masterpieces, which are now the symbol of a bygone era and are part of India's rich historical & cultural treasures. The forts in Madhya Pradesh stand tall as testaments to the region's glorious past, offering a glimpse into the architectural marvels and strategic significance that defined that era."
            img1={gwalior3}
            img2={gwalior4}
            />
        </div>
    )

}
export default Destionation;