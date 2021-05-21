import { NavLink } from "react-router-dom";

export function Nav() {
    return(
        <>
         <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        <h1>Home</h1>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/movies">
                        <h1>Movies</h1>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/register">
                        <h1>Register</h1>
                    </NavLink>
                </li>
                
            </ul>
        </nav>
    </>
    );
}