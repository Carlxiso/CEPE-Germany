import styles from "./Category.module.css";
import { categories } from "@/app/_lib/data-categories";

export default function Category() {
  return (
    <div className={styles.categoriesWrapper}>
      <h2 className={styles.categoriesTitle}>Trending Categories</h2>
      <p className={styles.categoriesSubtitle}>
        Latest breaking news, pictures, videos and special reports
      </p>
      <div className={styles.categoriesList}>
        {categories.map((category) => (
          <div key={category.id} className={styles.categoryCard}>
            <div className={styles.categoryOverlay} />
            <p className={styles.categoryName}>{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
