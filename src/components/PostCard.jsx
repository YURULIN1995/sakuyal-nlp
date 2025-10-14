import { Link } from 'react-router-dom';
import styles from '@styles/PostCard.module.scss';
import IconArrowRight from '@assets/icons/arrow-right.svg?react';

function PostCard({ post }) {
  const { slug, imageUrl, imageAlt, category, categorySlug, title, excerpt } = post;

  return (
    <article className={styles.card}>
      <Link to={`/blog/post/${slug}`} className={styles.cardImageLink}>
        <img src={imageUrl} alt={imageAlt} className={styles.cardImage} loading="lazy" />
      </Link>
      <div className={styles.cardContent}>
        {category && (
            <Link to={`/blog/${categorySlug}`} className="cardCategory">
              {category}
            </Link>
          )}
        <h3 className={styles.cardTitle}>
          <Link to={`/blog/post/${slug}`}>{title}</Link>
        </h3>
        {excerpt && <p className={styles.cardExcerpt}>{excerpt}</p>}
        <Link to={`/blog/post/${slug}`} className={styles.cardReadMore}>
          <span>閱讀更多</span>
          <IconArrowRight className={styles.cardIcon}/>
        </Link>
      </div>
    </article>
  );
}

export default PostCard;