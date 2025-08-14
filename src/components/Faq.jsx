import { useState } from 'react';
import styles from '@styles/Faq.module.scss' ;
import PageTitle from '@components/PageTitle';
import { faqData } from '@data/servicesPageData.js';
import IconCaretRight from '@assets/icons/caret-right.svg?react'; // 匯入新的 Tabler Icon

// 建立一個獨立的 FaqItem 元件來處理單個問答的邏輯
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
          <IconCaretRight />
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

function Faq () {
  return (
    <div className={styles.faqSection}>
      <PageTitle title={faqData.faqTitle}/>
      <div className={styles.faqFlex}>
        {faqData.questionStacks.map(item => (
          <FaqItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Faq;