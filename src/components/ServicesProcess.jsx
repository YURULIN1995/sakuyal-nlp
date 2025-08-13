import styles from '@styles/ServicesProcess.module.scss';
import { processData } from '@data/servicesPageData.js';
import PageTitle from '@components/PageTitle';

function ServicesProcess() {
  return (
    <div className={styles.processSection}>
      <PageTitle title={processData.title} />
      <div className={styles.stepsFlex}>
          {processData.steps.map(step => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className={styles.stepCard}>
                <div className={styles.iconTextWrap}>
                  {IconComponent && (
                    <div className={styles.iconWrapper}>
                      <IconComponent />
                    </div>
                  )}
                  <div className={styles.stepText}>
                    <h4 className={styles.stepTitle}>{step.title}</h4>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ServicesProcess;
