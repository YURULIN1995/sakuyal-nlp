import styles from '@styles/SocialLinks.module.scss';

function SocialLinks({ links = [] }) {
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