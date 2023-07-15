import ArticleInfo from "../molecule/ArticleInfo";
import { articles } from "../../utils/constant";

const Articles = () => {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-12 sm:mt-24">
      {articles.map((article) => (
        <ArticleInfo key={article.id} article={article} />
      ))}
    </section>
  );
};

export default Articles;
