import styles from '@styles/Comparison.module.scss';
import PageTitle from '@components/PageTitle';
import IconCheck from '@assets/icons/check.svg?react';
import IconX from '@assets/icons/x.svg?react';

// 建立一個圖示名稱到 React 元件的映射物件
const iconComponents = {
  IconCheck,
  IconX,
};

function TargetAudience({ data }) {

  // 防止空值傳入的判斷式
  if (!data || !data.lists || data.lists.length === 0) {
    return null;
  }

  const { title, lists } = data;

  return (
    <div className={styles.comparisonSection}>
      <PageTitle title={title} />
      <div className={styles.flexWrap}>
        {lists.map((list) => {
          // 根據 iconName 取得對應的圖示元件
          const IconComponent = iconComponents[list.iconName];

          return (
            <div key={list.id} className={styles.column}>
              <div className={styles.columnPadding}>
                <h3>
                {/* ▼▼▼ 主要修改點 ▼▼▼ */}
                {/* 移除了這裡的圖示，只保留文字 */}
                {list.text}
              </h3>
              <ul>
                {list.items.map((item) => (
                  <li key={item.id}>
                    {/* 這裡的圖示保持不變 */}
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

export default TargetAudience;