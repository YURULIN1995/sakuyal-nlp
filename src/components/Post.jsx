import { Link } from 'react-router-dom';
import { urlFor } from '@/sanity.client.js';
import { Fragment } from 'react';
import styles from '@styles/Post.module.scss';
import ResponsiveImage from '@components/ResponsiveImage';
import Button from '@components/Button';
import { siteMeta } from '@/data/siteMeta';

/**
 * Post 元件
 * 角色：元件層，專注於渲染單篇文章的內容。
 * @param {object} props - 包含 post 物件的 props
 */

function Post({post}) {
  if (!post) {
      return null;
  }

  const { title, category, categorySlug, mainImage, imageAlt, content } = post;

  // 輔助函式：用來渲染帶有樣式（如粗體）的文字片段
  const renderSpan = (span, key) => {
    let textNode = <Fragment key={key}>{span.text}</Fragment>;

    // 檢查 marks 陣列，並套用對應的樣式標籤
    if (span.marks && span.marks.length > 0) {
      span.marks.forEach(mark => {
        if (mark === 'strong') {
          textNode = <strong key={`${key}-strong`}>{textNode}</strong>;
        }
        // 您可以在此處擴充，支援 'em' (斜體), 'underline' 等
      });
    }
    return textNode;
  };


  // 主渲染函式：根據 block 的 style 屬性來渲染
  const renderContentBlock = (block) => {
    // 每個 block 都必須有 _key，這是 React 高效渲染列表所必需的
    if (!block || !block._key) {
      return null;
    }

    // 渲染 block 中的所有 children spans
    const children = block.children ? block.children.map((span, index) => renderSpan(span, `${block._key}-${index}`)) : null;

    // 根據 style 屬性來決定要渲染成哪種 HTML 標籤
    switch (block.style) {
      case 'h2':
        return <h2 key={block._key}>{children}</h2>;
      case 'h3':
        return <h3 key={block._key}>{children}</h3>;
      case 'normal':
      default:
        return <p key={block._key}>{children}</p>;
    }
  };


  return (
     <article className={styles.postArticle}>
      <div className={styles.articleHeader}>
        <h1 className={styles.postTitle}>{title}</h1>
        <p className={styles.postCategory}>
          <Link to={`/blog/${categorySlug}`} className={styles.categoryLink}>{category}</Link>
           &nbsp;/&nbsp;作者：<Link to="/about" className={styles.authorLink}>{siteMeta.siteAuthorName}</Link>
        </p>
      </div>
      {mainImage && (<ResponsiveImage source={mainImage} alt={imageAlt} className={styles.postImage} sizes="(max-width: 920px) 100vw, 800px" loading="eager" />)}
      <div className={styles.postBody}>
        {content && content.map(renderContentBlock)}
      </div>
    </article>
  );
}

export default Post;