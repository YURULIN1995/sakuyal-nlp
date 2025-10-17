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
    // 使用 listStack 來管理巢狀列表
    const listStack = []; 
  
    const closeOpenLists = () => {
      while (listStack.length > 0) {
        const list = listStack.pop();
        const ListTag = list.tag;
        const listComponent = <ListTag key={`list-${Math.random()}`} className={styles.postList}>{list.items}</ListTag>;
        
        if (listStack.length > 0) {
          // 如果還有外層列表，將此列表包裝成 <li> 添加到外層
          const parentList = listStack[listStack.length - 1];
          // 找到最後一個 li 並將子列表塞進去
          const lastLi = parentList.items[parentList.items.length - 1];
          // React 的 children 不能直接修改，所以我們重新建立 li
          parentList.items[parentList.items.length - 1] = (
            <li key={lastLi.key}>
              {lastLi.props.children}
              {listComponent}
            </li>
          );
        } else {
          // 如果是最外層列表，直接推入 components
          components.push(listComponent);
        }
      }
    };
  
    blocks.forEach(block => {
      const children = block.children ? block.children.map((span, index) => renderSpan(span, `${block._key}-${index}`)) : null;
  
      if (block.listItem) {
        const level = block.level || 1;
        const ListTag = block.listItem === 'number' ? 'ol' : 'ul';
  
        // 如果層級比現在的深，就建立新列表
        if (level > listStack.length) {
            // 在進入新層級前，必須確保父層 li 已經存在
            if (listStack.length > 0 && level - listStack.length > 1) {
              // Sanity 的 level 不應該跳級，但做個防呆
              console.warn('List level inconsistency detected.');
            }
            listStack.push({ tag: ListTag, items: [] });
        }
  
        // 如果層級比現在的淺，就關閉多餘的列表
        while (level < listStack.length) {
          const list = listStack.pop();
          const ListTag = list.tag;
          const listComponent = <ListTag key={`list-${block._key}-${listStack.length}`} className={styles.postList}>{list.items}</ListTag>;
          
          const parentList = listStack[listStack.length - 1];
          const lastLi = parentList.items[parentList.items.length - 1];
          parentList.items[parentList.items.length - 1] = (
            <li key={lastLi.key}>
              {lastLi.props.children}
              {listComponent}
            </li>
          );
        }
  
        // 添加 <li> 到當前層級的列表中
        const currentList = listStack[listStack.length - 1];
        if (currentList) {
          currentList.items.push(<li key={block._key}>{children}</li>);
        }
        
      } else {
        // 遇到非列表項目，關閉所有已開啟的列表
        closeOpenLists();
  
        // 渲染非列表項目
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
            // 處理空段落或正常段落
            if (children && children.some(child => child.props.children !== '')) {
              components.push(<p key={block._key}>{children}</p>);
            }
            break;
        }
      }
    });
  
    // 處理結尾還未關閉的列表
    closeOpenLists();
  
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
      {mainImage && (<ResponsiveImage source={mainImage} alt={imageAlt} className={styles.postImage} sizes="(max-width: 920px) 100vw, 800px" loading="lazy" />)}
      <div className={styles.postBody}>
        {renderPortableText(content)}
      </div>
    </article>
  );
}

export default Post;