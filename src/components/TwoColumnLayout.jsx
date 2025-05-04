import styles from '@styles/TwoColumnLayout.module.css';

/**
 * 接收左右兩欄內容的通用佈局元件
 * @param {React.ReactNode} textSlot - 放入左側文字區的內容
 * @param {React.ReactNode} imageSlot - 放入右側圖片區的內容 (可選)
 * @param {string} className - 附加到 contentContainer 的額外 class，可用於設定 padding 等
 * @param {string} textContainerClassName - 附加到 textContainer 的額外 class
 * @param {string} imageContainerClassName - 附加到 imageContainer 的額外 class
 */
function TwoColumnLayout({
  textSlot,
  imageSlot,
  className = '',
  textContainerClassName = '',
  imageContainerClassName = ''
}) {

  const containerClasses = `${styles.contentContainer} ${className}`;
  const textContainerClasses = `${styles.textContainer} ${textContainerClassName}`;
  const imageContainerClasses = `${styles.imageContainer} ${imageContainerClassName}`;

  return (
    <div className={containerClasses}>
      <div className={styles.innerColumns}>
        <div className={textContainerClasses}>
          {textSlot}
        </div>
        {imageSlot && (
          <div className={imageContainerClasses}>
            {imageSlot}
          </div>
        )}
      </div>
    </div>
  );
}

export default TwoColumnLayout;