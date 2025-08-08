// 檔案: src/components/Hero.jsx (重構後)

import styles from '@styles/Hero.module.scss';
import TextImageSlot from '@components/TextImageSlot.jsx';
// 1. (新增) 匯入我們新的背景元件
import BicolorBackground from '@components/BicolorBackground.jsx';

function Hero(props) {
  return (
    // 2. (修改) 使用 BicolorBackground 作為最外層的包裹元件
    //    並將原本 heroSection 的樣式 (如 min-height) 傳遞給它
    <BicolorBackground className={styles.heroSection}>
      
      {/* 3. (移除) 原本的背景層 <div> 已被 BicolorBackground 取代 */}

      {/* 4. (不變) 內容層 TextImageSlot 現在是 BicolorBackground 的 children */}
      <TextImageSlot
        {...props}
        layoutClassName={styles.heroContainerSpecifics}
        textContainerLayoutClassName={styles.heroTextContainerMobile}
        imageContainerLayoutClassName={styles.heroImageContainerMobile}
      />
    </BicolorBackground>
  );
}

export default Hero;