import React from 'react';
import styles from '@styles/KanbanSection.module.css';
import ContentSection from '@components/ContentSection';

function KanbanSection(props) {
  const { isReversed = false, ...restProps } = props;
  const wrapperClasses = `${styles.kanbanSectionWrapper} ${isReversed ? styles.wrapperReversedBackground : ''}`;
  return (
    <section className={wrapperClasses}>
      <ContentSection
        {...restProps} // 傳遞剩餘的 props 給 ContentSection
        isReversed={isReversed} // 也需要把 isReversed 傳下去給 ContentSection -> TwoColumnLayout 控制左右反轉
        layoutClassName={styles.kanbanContainerPadding}
      />
    </section>
  );
}

export default KanbanSection;