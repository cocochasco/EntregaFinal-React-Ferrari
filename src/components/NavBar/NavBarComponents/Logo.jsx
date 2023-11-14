import { Link } from "react-router-dom"

import logo  from "/Users/thomasferrari/Desktop/React/ecommerce-onesta/ecommerceonesta/src/images/logo.svg"

export const Logo = () =>  {
    return (       
            <Link to="/">
                <img src={logo} className="navBar-logo" alt="logo"/>
            </Link>
   
    )
}