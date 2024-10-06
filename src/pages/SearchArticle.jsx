import { Link, useParams } from "react-router-dom"
import styles from "../Styles/SearchArticle.module.css"

function SearchArticle(){
    const { articleId, articletitle } = useParams(); 
    return(
        <div className={styles.searchArticle_box} >
    <h1 className={styles.searchArticle_title} >{articletitle}</h1>
    <p className={styles.searchArticle_id} >Title ID: {articleId}</p>
    <Link to="/article">
        <button className={styles.searchArticle_btn} >К списку статей</button>
    </Link>
        </div>
   )
}
export default  SearchArticle