import Destionationdata from "./Destinationdata";
import "./Deststyles.css"
import gwalior1 from "../assets/1.jpg"
import gwalior2 from "../assets/gwl.jpg"
import ben from "../assets/ben1.jpg"
import ben2 from "../assets/ben2.jpg"

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
            heading="Bengaluru,Karnataka"
            text=" Bengaluru (also called Bangalore) is the capital of India's southern Karnataka state. The center of India's high-tech industry, the city is also known for its parks and nightlife. By Cubbon Park, Vidhana Soudha is a Neo-Dravidian legislative building. Former royal residences include 19th-century Bangalore Palace, modeled after England’s Windsor Castle, and Tipu Sultan’s Summer Palace, an 18th-century teak structure."
            img1={ben}
            img2={ben2}
            />
        </div>
    )

}
export default Destionation;