import { Link } from 'react-router-dom'; // 建議用於內部連結
import styles from '@styles/Button.module.scss';

/**
 * 通用的按鈕元件
 * @param {string} link - 點擊後導向的 URL
 * @param {string} text - 按鈕顯示的文字
 * @param {React.ReactNode} endIcon - (可選) 顯示在文字右側的圖示元件
 * @param {string} className - (可選) 額外的 CSS class
 */
function Button({ to, text, endIcon, className }) {

  // 組合 class 名稱，包含預設的 .button 和外部傳入的 className
  const buttonClassName = `${styles.button} ${className || ''}`.trim();

  // 決定要渲染的內容 (文字 + 圖示)
  const content = (
    <>
      {text}
      {/* 如果 endIcon 存在，則渲染它 */}
      {endIcon && (
        <span className={styles.iconWrapper}>
          {endIcon}
        </span>
      )}
    </>
  );

  // 判斷是否為外部連結
  const isExternal = to.startsWith('http');

  // 如果是外部連結，使用 <a> 標籤；否則使用 react-router 的 <Link> 元件
  return isExternal ? (
    <a 
      href={to} 
      className={buttonClassName}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  ) : (
    <Link to={to} className={buttonClassName}>
      {content}
    </Link>
  );
}

export default Button;