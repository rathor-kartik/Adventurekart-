import {Component} from "react";
import { MenuItems } from "./MenuItems";
import "./Navbarstyle.css";
import { Link } from 'react-router-dom';

class Navbar extends Component{
    state={clicked:false};
    handleclick=()=>{
        this.setState({clicked : !this.state.clicked})
    }
    render(){
        return( 
            <nav className="NavbarItems">
                <h1 className="NavbarLogo">AdventureKart</h1>
                <div className="menu-icon" onClick={this.handleclick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked?"nav-menu active":"nav-menu"}>


                    {MenuItems.map((item,index)=>{
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    <i className={item.icon}></i>  {item.title}
                                </Link>
                            </li>
                        )
                    })}
                    <Link to ="/signin"><button >Sign up</button></Link>
                    
                </ul>
            </nav>
        )
    }
}
export default Navbar;
