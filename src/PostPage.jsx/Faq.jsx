import { useState } from 'react';
import styles from '@styles/Faq.module.scss' ;
import PageTitle from '@/PostPage.jsx/PageTitle';
import IconChevronRight from '@assets/icons/chevron-right.svg?react';

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.faqItem}>
      <button className={styles.question} onClick={toggleOpen}>
        <span>{item.title}</span>
        {/* 根據 isOpen 狀態動態旋轉箭頭 */}
        <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>
          {/* 使用匯入的 IconCaretRight 元件 */}
          <IconChevronRight />
        </span>
      </button>
      {/* 根據 isOpen 狀態顯示或隱藏答案 */}
      <div className={`${styles.answer} ${isOpen ? styles.open : ''}`}>
        <div className={styles.answerContent}>
          {item.answer}
        </div>
      </div>
    </div>
  );
};

function Faq ({title, items}) {
  if (!title || !Array.isArray(items) || items.length == 0) {
    return null;
  }

  return (
    <div className={styles.faqSection}>
      <PageTitle title={title}/>
      <div className={styles.faqFlex}>
        {items.map(item => (
          <FaqItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Faq;