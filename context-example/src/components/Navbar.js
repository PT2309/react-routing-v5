import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { UserAuthContext } from "../contexts/UserAuthContext";

const Navbar = () => {
    // const theme = useContext(ThemeContext);
    // console.log(theme);

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { isLoggedIn } = useContext(UserAuthContext);

    const theme = isLightTheme ? light : dark
    return(
        <nav style={{ backgroundColor: theme.bg, color: theme.syntax}}>
            <h3>User Login Status { isLoggedIn ? 'Authenticated': 'Sign In here!'}</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;