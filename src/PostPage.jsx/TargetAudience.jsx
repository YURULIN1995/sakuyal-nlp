import styles from '@styles/TargetAudience.module.scss';
import PageTitle from '@/PostPage.jsx/PageTitle';
import IconCheck from '@assets/icons/check.svg?react';
import IconX from '@assets/icons/x.svg?react';

const iconComponents = {
  IconCheck,
  IconX
};

function TargetAudience({ data }) {

  if (!data || !data.lists || data.lists.length === 0) {
    return null;
  }

  const { title, lists } = data;

  return (
    <div className={styles.comparisonSection}>
      <PageTitle title={title} />
      <div className={styles.flexWrap}>
        {lists.map((list) => {
          const IconComponent = iconComponents[list.iconName];

          return (
            <div key={list.id} className={styles.column}>
              <div className={styles.columnPadding}>
                <div className={styles.targetAudienceList}>
                  <h3>{list.text}</h3>
                  <ul>
                    {list.items.map((item) => (
                      <li key={item.id}>
                        {IconComponent && <IconComponent className={styles.icon} />}
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TargetAudience;