import styles from '@styles/ContactLinks.module.scss';
import { contactLink } from '@data/contactPageData.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLine, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import IconMail from '@assets/icons/mail.svg?react';

const iconMap = {
  'IconMail': <IconMail />,
  'LINE': <FontAwesomeIcon icon={faLine} />,
  'Messenger': <FontAwesomeIcon icon={faFacebookMessenger} />
};

function ContactLinks() {
  return (
    <div className={styles.contactLinksContainer}>
      {contactLink.map(item => (
        <a key={item.id} href={item.contactUrl} className={styles.linkItem} target="_blank" rel="noopener noreferrer">
          <div className={styles.iconWrapper}>
            {iconMap[item.icon]}
          </div>
          <span className={styles.contactName}>{item.contactName}</span>
        </a>
      ))}
    </div>
  );
}

export default ContactLinks;
