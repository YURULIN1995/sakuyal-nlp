import styles from '@styles/ServicesProcess.module.scss';
import { processData } from '@data/servicesPageData.js';
import PageTitle from '@components/PageTitle';

function ServicesProcess() {
  return (
    <div className={styles.processSection}>
      <PageTitle title={processData.title} />
      <div className={styles.stepsGrid}>
        {processData.steps.map(step => {
          // 直接從 step.icon 取得已匯入的元件
          const IconComponent = step.icon;
          return (
            <div key={step.id} className={styles.stepCard}>
              {/* 確保 IconComponent 存在再渲染 */}
              {IconComponent && (
                <div className={styles.iconWrapper}>
                  <IconComponent />
                </div>
              )}
              <h4 className={styles.stepTitle}>{step.title}</h4>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServicesProcess;