import "./TripStyles.css"
import TripData from "./TripData"
import trip1 from "../assets/Bho.jpg"
import trip2 from "../assets/ind.jpg"
import trip3 from "../assets/noi.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>
                Recent Trip
            </h1>
            <p>
                you can discover your unique destination using google maps!!
            </p>

            <div className="tripcard">
                
                <TripData
                image={trip1}
                heading="Bhopal"
                text="Bhopal, the capital city of the Indian state of Madhya Pradesh, is known for its rich history, diverse culture, and scenic beauty.Bhopal has a fascinating history that dates back to ancient times. It was originally a part of the Gond kingdom in the early medieval period."
                />
                <TripData
                image={trip2}
                heading="Indore"
                text="Indore, the capital city of the Indian state of Madhya Pradesh, is known for its rich history, diverse culture, and scenic beauty.Bhopal has a fascinating history that dates back to ancient times. It was originally a part of the Gond kingdom in the early medieval period."
                />
                <TripData
                image={trip3}
                heading="Noida"
                text="Noida, the capital city of the Indian state of Madhya Pradesh, is known for its rich history, diverse culture, and scenic beauty.Bhopal has a fascinating history that dates back to ancient times. It was originally a part of the Gond kingdom in the early medieval period."
                />
            </div>
        </div>
    );
}

export default Trip;