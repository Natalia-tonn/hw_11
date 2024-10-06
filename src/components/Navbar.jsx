import { Link } from "react-router-dom"
import styles from "../Styles/Navbar.module.css"

function Navbar(){ 
    return(
   <nav >
    <ul >
        <li >
            <Link to="/"  className={styles.navbar_link}>Главная</Link>
        </li>
        <li>
            <Link to="/article" className={styles.navbar_link}  >Статьи</Link>
        </li>
    </ul>
   </nav>
    )
}
export default Navbar