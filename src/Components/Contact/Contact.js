import { NavLink, Link, Outlet } from "react-router-dom";


export default function Contact(){

    return (
        <>
            <div>
                <NavLink to='phone'>By Phone</NavLink>
                <NavLink to='email'>By Email</NavLink>
            </div>
            <div>Welcome to Contact Page</div>
            <Outlet />
        </>
        
    )


}