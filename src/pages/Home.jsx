import { Link } from "react-router-dom"
import styles from "../Styles/Home.module.css"

function Home(){
    return(
         <div className={styles.home_box} >
            <h1>Подборка статей </h1>
             <Link to="/article" >
             <h2>Статьи о биологии южных морей</h2>
             </Link>
        </div>
    )
}
export default Home