import { Link } from 'react-router-dom';
import styles from '@styles/PostCard.module.scss';

function PostCard({ post }) {
  const { postUrl, imageUrl, imageAlt, category, title, excerpt, buttonText, buttonIcon: ButtonIcon } = post;

  return (
    <article className={styles.card}>
      <Link to={postUrl} className={styles.cardImageLink}>
        <img src={imageUrl} alt={imageAlt} className={styles.cardImage} loading="lazy" />
      </Link>
      <div className={styles.cardContent}>
        {category && <p className={styles.cardCategory}>{category}</p>}
        <h3 className={styles.cardTitle}>
          <Link to={postUrl}>{title}</Link>
        </h3>
        {excerpt && <p className={styles.cardExcerpt}>{excerpt}</p>}
        <Link to={postUrl} className={styles.cardReadMore}>
          {buttonText || '閱讀更多'}
          {ButtonIcon && <ButtonIcon className={styles.cardIcon} />}
        </Link>
      </div>
    </article>
  );
}

export default PostCard;