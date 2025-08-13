import styles from '@styles/Button.module.scss';

/**
 * 通用的按鈕元件
 * @param {string} text - 按鈕上顯示的文字
 * @param {string} link - 按鈕點擊後前往的連結
 */
function Button({ text, link }) {
  return (
    <a href={link} className={styles.button}>
      {text}
    </a>
  );
}

export default Button;