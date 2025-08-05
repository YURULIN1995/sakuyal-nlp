import styles from '@styles/SocialLink.module.scss';

// 這個元件接收一個名為 links 的 prop，預設是個空陣列
function SocialLinks({ links = [] }) {
  // 如果沒有傳入 links，或 links 是空的，就不渲染任何東西
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <ul className={styles.socialList}>
      {links.map(social => (
        <li key={social.id}>
          <a
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={styles.socialLink}
          >
            <i className={social.iconClass} aria-hidden="true"></i>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;