import SEO from '@components/Head/SEO';
import styles from '@styles/BlogPage.module.css';

function BlogPage() {
  console.log("Rendering BlogPage");

  return (
    <>
      <SEO title="文章" description="這是Sakuyal 自然語言煉金術的文章頁面。" />

      <div className={styles.container}>
        <h1 className={styles.title}>文章</h1>
        <p className={styles.message}>這裡是文章，稍後會進行補充。</p>
      </div>
    </>
  );
}

export default BlogPage;