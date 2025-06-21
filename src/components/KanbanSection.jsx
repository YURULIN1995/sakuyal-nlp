import React from 'react';
import styles from '@styles/KanbanSection.module.scss';
import TextImageSlot from '@components/TextImageSlot.jsx';

function KanbanSection(props) {
  const { isReversed = false, ...restProps } = props;
  const wrapperClasses = `${styles.kanbanSectionWrapper} ${isReversed ? styles.wrapperReversedBackground : ''}`;
  return (
    <section className={wrapperClasses}>
      <TextImageSlot
        {...restProps} // 傳遞剩餘的 props 給 TextImageSlot
        isReversed={isReversed} // 也需要把 isReversed 傳下去給 TextImageSlot -> TwoColumnLayout 控制左右反轉
        layoutClassName={styles.kanbanContainerPadding}
      />
    </section>
  );
}

export default KanbanSection;