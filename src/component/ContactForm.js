import "./ContactFormStyles.css";

function ContactForm(){


    return(
        <div className="from-container">   
        <h1>Send a Query!!</h1>
        <form>
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
            <input type="subject" placeholder="Subject"/>
            <textarea type="query" placeholder="Query" rows={4}></textarea>
            <button>Send Query</button> 
        </form>
        </div>
    )
}

export default ContactForm