import SEO from '@components/Head/SEO';
import styles from '@styles/Upsell.module.scss';
import BeforeAfter from '@components/BeforeAfter';
import { siteMeta } from '@data/siteMeta.js';
import { freeDownloadData } from '@data/freeDownloadData.js';
import { beforeAfterData } from '@data/servicesPageData.js';

function Upsell () {
    const { title, description } = siteMeta.pages.upsell;
    const outlinks = siteMeta.outlinks;

    return (
        <>
            <SEO title={title} description={description} />
            <main className={styles.main}>
                <div className={styles.callToAction}>
                    <p>很高興你對{siteMeta.coreTheme.topic}有興趣。</p>
                    <p>請馬上檢查email信箱，標題為「{freeDownloadData.titleLine2}」</p>
                    <p>在等待的同時，歡迎：</p>
                    <ol>
                        <li>加入臉書社團：
                            <a href={siteMeta.outlinks.facebookFreeGroup}>{outlinks.facebookFreeGroup.name}</a>
                        </li>
                    </ol>
                </div>
                <BeforeAfter data={beforeAfterData}/>
            </main>
        </>
    );
}

export default Upsell;