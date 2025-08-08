import styles from '@styles/OneColumnLayout.module.scss';

function OneColumnLayout({ children, className = '' }) {
  const containerClasses = `${styles.container} ${className}`;

  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
}

export default OneColumnLayout;