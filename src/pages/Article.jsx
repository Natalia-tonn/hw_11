import { Link } from "react-router-dom";
import styles from "./Article.module.css"


const articles = [
    { id: 1, title: "Экосистемы Южных Океанов: Влияние Климатических Изменений" },
    { id: 2, title: "Адаптации морских обитателей к условиям Антарктического моря" },
    { id: 3, title: "Биоразнообразие и пищевые сети в Южных морях" },
    { id: 4, title: "Миграционные маршруты китов в южных водах" },
    { id: 5, title: "Изучение коралловых рифов и их обитателей в Южных морях" },
    { id: 6, title: "Воздействие загрязнений на флору и фауну южных океанов" }
  ];
  
  function Article() {
    return (
      <div className={styles.article_box}>
        <h1 className={styles.title} >Статьи о биологии южных морей</h1>
        <ul className={styles.articles} >
          {articles.map((article) => {
            return (
              <li key={article.id}  className={styles.articles_item} >
                <Link to={`/article/${article.id}/${article.title}`}>{article.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  
  export default Article;