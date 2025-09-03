import { useState } from 'react';
import styles from '@styles/Faq.module.scss' ;
import PageTitle from '@components/PageTitle';
import { servicesPageData, faq } from '@data/servicesPageData.js';
import IconCaretRightFilled from '@assets/icons/caret-right.svg?react';

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
          <IconCaretRightFilled />
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
      <PageTitle title={faq.faqTitle}/>
      <div className={styles.faqFlex}>
        {faq.questionStacks.map(item => (
          <FaqItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Faq;