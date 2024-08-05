import "./FooterStyles.css"

const Footer=()=>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1> AdventureKart</h1>
                    <p>Choose your destination.</p>
                </div>
                <div>
                    <a href="/"><i className="fa-brands fa-facebook-square"></i></a>
                    <a href="/"><i className="fa-brands fa-instagram-square"></i></a>
                    <a href="/"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="/"><i className="fa-brands fa-x-twitter"></i></a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All version</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">Github</a>
                    <a href="/">Project</a>
                    <a href="/">Issues</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact us</a>
                    
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of service</a>
                    <a href="/">Privacy and policy</a>
                    <a href="/">Cookies</a>
                </div>
            </div>
        </div>
    );
}
export default Footer 