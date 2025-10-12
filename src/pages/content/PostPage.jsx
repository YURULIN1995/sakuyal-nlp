import styles from '@styles/PostPage.module.scss';
import OneColumnLayout from '@components/OneColumnLayout';
import Post from '@components/Post';
import { displayPostsData } from '@data/blogData.js';

/**
 * PostPage 元件
 * 角色：頁面層，負責組裝版面、取得並傳遞資料。
 */
function PostPage() {
  // 1. 取得資料：從資料層 (blogData.js) 找出 ID 為 'post1' 的文章。
  // 未來這裡的 'post1' 會由路由（如 React Router）動態傳入。
  const postData = displayPostsData.find(p => p.id === 'post1');

  // 如果找不到文章，顯示一個簡單的錯誤訊息。
  if (!postData) {
    return <div>文章不存在！</div>;
  }

  // 2. 渲染版面：將頁面分為文章內容區和側邊欄 (widget)。
  return (
    <>
      {/* 使用 styles 物件來正確套用 CSS Modules class */}
      <div className={styles.transparentTop}></div>
      <div className={styles.container}>
        <OneColumnLayout className={styles.content}>
          {/* 3. 傳遞資料：將找到的文章物件 (postData) 作為 prop 傳遞給 Post 元件。 */}
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

