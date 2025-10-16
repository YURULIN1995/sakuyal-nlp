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
    if (span.marks && span.marks.length > 0) {
      span.marks.forEach(mark => {
        if (mark === 'strong') {
          textNode = <strong key={`${key}-strong`}>{textNode}</strong>;
        }
      });
    }
    return textNode;
  };


  // 主渲染函式：根據 block 的 style 屬性來渲染
  const renderPortableText = (blocks) => {
    if (!blocks) return null;

    const components = [];
    let currentList = null;

    blocks.forEach(block => {
      const children = block.children ? block.children.map((span, index) => renderSpan(span, `${block._key}-${index}`)) : null;

      if (block.listItem) {
        const ListTag = block.listItem === 'number' ? 'ol' : 'ul';
        const li = <li key={block._key}>{children}</li>;

        if (!currentList || currentList.tag !== ListTag) {
          if (currentList) {
            const FinalListTag = currentList.tag;
            components.push(<FinalListTag key={`list-${block._key}-prev`} className={styles.postList}>{currentList.items}</FinalListTag>);
          }
          currentList = { tag: ListTag, items: [li] };
        } else {
          currentList.items.push(li);
        }
      } else {
        if (currentList) {
          const FinalListTag = currentList.tag;
          components.push(<FinalListTag key={`list-${block._key}`} className={styles.postList}>{currentList.items}</FinalListTag>);
          currentList = null;
        }

        switch (block.style) {
          case 'h2':
            components.push(<h2 key={block._key}>{children}</h2>);
            break;
          case 'h3':
             components.push(<h3 key={block._key}>{children}</h3>);
            break;
          case 'h4':
             components.push(<h4 key={block._key}>{children}</h4>);
            break;
          default:
            components.push(<p key={block._key}>{children}</p>);
            break;
        }
      }
    });

    if (currentList) {
      const FinalListTag = currentList.tag;
      components.push(<FinalListTag key="last-list" className={styles.postList}>{currentList.items}</FinalListTag>);
    }

    return components;
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
        {renderPortableText(content)}
      </div>
    </article>
  );
}

export default Post;