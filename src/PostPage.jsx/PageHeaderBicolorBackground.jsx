import styles from '@styles/PageHeaderBicolorBackground.module.scss';
import BicolorBackground from '@/PostPage.jsx/BicolorBackground';
import PageTitle from '@/PostPage.jsx/PageTitle';

/**
 * 通用的頁首標題區塊 (帶有雙色背景)
 * @param {string} title - 要顯示的頁面標題
 */
function PageHeaderBicolorBackground({ title }) {
  return (
    <BicolorBackground>
      <div className={styles.titleContainer}>
        <PageTitle title={title} />
      </div>
    </BicolorBackground>
  );
}

export default PageHeaderBicolorBackground;