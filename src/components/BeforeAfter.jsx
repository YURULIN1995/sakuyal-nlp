import styles from '@styles/BeforeAfter.module.scss';
import PageTitle from '@components/PageTitle';
import IconMoodSmileBeam from '@assets/icons/mood-smile-beam.svg?react';
import IconMoodSadSquint from '@assets/icons/mood-sad-squint.svg?react';

const iconComponents = {
  IconMoodSmileBeam,
  IconMoodSadSquint
};

function Comparison({ data }) {

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
                <h3>
                {list.text}
              </h3>
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
          );
        })}
      </div>
    </div>
  );
}

export default Comparison;