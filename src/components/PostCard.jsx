import { Link } from 'react-router-dom';
import styles from '@styles/PostCard.module.scss';
import IconArrowRight from '@assets/icons/arrow-right.svg?react';

function PostCard({ post }) {
  const { slug, imageUrl, imageAlt, category, title, excerpt } = post;

  return (
    <article className={styles.card}>
      <Link to={slug} className={styles.cardImageLink}>
        <img src={imageUrl} alt={imageAlt} className={styles.cardImage} loading="lazy" />
      </Link>
      <div className={styles.cardContent}>
        {category && <p className={styles.cardCategory}>{category}</p>}
        <h3 className={styles.cardTitle}>
          <Link to={slug}>{title}</Link>
        </h3>
        {excerpt && <p className={styles.cardExcerpt}>{excerpt}</p>}
        <Link to={slug} className={styles.cardReadMore}>
          <span>閱讀更多</span>
          <IconArrowRight className={styles.cardIcon}/>
        </Link>
      </div>
    </article>
  );
}

export default PostCard;