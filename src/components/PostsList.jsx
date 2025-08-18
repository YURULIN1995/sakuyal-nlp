import PostCard from '@components/PostCard';
import styles from '@styles/PostsList.module.scss';

function PostsList({ posts }) {
  if (!posts || posts.length === 0) {
    return <p>目前沒有文章。</p>;
  }

  return (
    <div className={styles.postsGrid}>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostsList;