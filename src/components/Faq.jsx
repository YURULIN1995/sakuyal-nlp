import styles from '@styles/Faq.module.scss' ;
import PageTitle from '@components/PageTitle';
import { faqData } from '@data/servicesPageData.js';

function Faq () {
    return (
        <>
            <div className={styles.faqSection}>
                <PageTitle title={faqData.faqTitle}/>
            </div>
        </>
    );
}

export default Faq;