import SEO from '@components/Head/SEO';
import styles from '@styles/BlogPage.module.css';

function BlogPage() {
  console.log("Rendering BlogPage");

  return (
    <>
      <SEO title="文章" description="這是Sakuyal 自然語言煉金術的文章頁面。" />

      <div className={styles.container}>
        <h1 className={styles.title}>文章</h1>
        <p className={styles.message}>補充文章。</p>
      </div>
    </>
  );
}

export default BlogPage;