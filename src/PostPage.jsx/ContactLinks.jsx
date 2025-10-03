import styles from '@styles/ContactLinks.module.scss';
import { contactLink } from '@data/contactPageData.js';

// 1. 匯入 Font Awesome 元件和需要的圖示
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLine, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

// 2. 匯入您既有的 Tabler Icon
import IconMail from '@assets/icons/mail.svg?react';

// 3. 建立一個圖示對照表 (Mapping)
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
          {/* 【新增】顯示 contactName */}
          <span className={styles.contactName}>{item.contactName}</span>
        </a>
      ))}
    </div>
  );
}

export default ContactLinks;
