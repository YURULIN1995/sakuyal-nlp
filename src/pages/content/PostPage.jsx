import { useParams } from 'react-router-dom';
import styles from '@styles/PostPage.module.scss';
import OneColumnLayout from '@components/OneColumnLayout';
import Post from '@components/Post';
import { displayPostsData } from '@data/blogData.js';

function PostPage() {

  const { postSlug } = useParams();
  const postData = displayPostsData.find(p => p.slug === postSlug);

  if (!postData) {
    return <div>文章不存在！</div>;
  }

  return (
    <>
      <div className={styles.transparentTop}></div>
      <div className={styles.container}>
        <OneColumnLayout className={styles.content}>
          <Post post={postData} />
        </OneColumnLayout>
        
        <div className={styles.widget}>
          <p>Widget</p>
        </div>
      </div>
    </>
  );
}

export default PostPage;

