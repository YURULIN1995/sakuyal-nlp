import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import styles from '@styles/Post.module.scss';
import Button from '@components/Button';

/**
 * Post 元件
 * 角色：元件層，專注於渲染單篇文章的內容。
 * @param {object} props - 包含 post 物件的 props
 */

function Post({post}) {

if (!post) {
    return null;
}

  // 輔助函式：用來渲染帶有樣式（如粗體）的文字片段
  const renderSpans = (spans, blockKey) => {
    if (!spans) return null;
        return spans.map((span, spanKey) => {
            const key = `${blockKey}-${spanKey}`;
            // 根據 marks 陣列來決定要套用什麼 React 元素
            if (span.marks && span.marks.includes('strong')) {
                return <strong key={key}>{span.text}</strong>;
            }
            // 預設直接回傳文字
            return <Fragment key={key}>{span.text}</Fragment>;
        });
  };

  // 主渲染函式：根據 block.type 來渲染對應的區塊
  const renderContentBlock = (block, index) => {
    const children = renderSpans(block.children, index);
    switch (block.type) {
      case 'h2':
        return <h2 key={index}>{children}</h2>;
      case 'h3':
        return <h3 key={index}>{children}</h3>;
      case 'p':
        return <p key={index}>{children}</p>;
        // 您可以根據需要，在這裡加入對 'ul'、'ol' 等其他類型的處理
      default:
        return null;
    }
  };

  return (
     <article className={styles.postArticle}>
      <p className={styles.postCategory}>{post.category}</p>
      <h1>{post.title}</h1>
      {/* 確保 className 正確地被附加到 img 標籤上 */}
      <img src={post.imageUrl} alt={post.imageAlt} className={styles.postImage} loading="lazy" />
      <div className={styles.postBody}>
        {post.content && post.content.map(renderContentBlock)}
      </div>
    </article>
  );
}name

export default Post;