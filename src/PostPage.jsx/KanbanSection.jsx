import styles from '@styles/KanbanSection.module.scss';
import TextSlot from '@/PostPage.jsx/TextSlot.jsx';

function KanbanSection(props) {
  // 將從 HomePage 接收到的所有 aboutData props 解構出來
  const { ...restProps } = props;

  return (
    <section className={styles.kanbanSectionWrapper}>
      <TextSlot
        {...restProps} // 將所有資料 props 透傳下去
        layoutClassName={styles.kanbanContainerPadding} // 傳遞特定的 padding class
      />
    </section>
  );
}

export default KanbanSection;