import SEO from '@components/Head/SEO';
import styles from '@styles/Upsell.module.scss';
import BackgroundColor from '@components/BackgroundColor';
import BeforeAfter from '@components/BeforeAfter';
import { siteMeta } from '@data/siteMeta.js';
import { freeDownloadData } from '@data/freeDownloadData.js';
import { beforeAfterData, targetAudienceData } from '@data/servicesPageData.js';

function Upsell() {
  const { title, description } = siteMeta.pages.upsell;

  return (
    <>
      <SEO title={title} description={description} />
      <main className={styles.main}>
        <div className={styles.callToAction}>
          <h2>很高興你對{siteMeta.coreTheme.topic}有興趣!</h2>
          <p>請馬上檢查email信箱，標題為「 {freeDownloadData.titleLine2}」</p>
          <p>在等待的同時，歡迎你</p>
          <ul>
            <li>1.加入<a href={siteMeta.outlinks.facebookFreeGroup.url}>{siteMeta.outlinks.facebookFreeGroup.name}</a></li>
            <li>2.追蹤<a href={siteMeta.outlinks.instagram.url}>{siteMeta.outlinks.instagram.name}</a></li>
            <li>3.閱讀<a href="/blog">文章</a></li>
          </ul>
          <p>我提供一個本頁限定優惠，讓你可以從0到1擁有🐷🐷的基礎能力。</p>
          <p>現在你可以用NT${siteMeta.price.selfStudyCourseUpsell}（官網價NT${siteMeta.price.selfStudyCourse}的）加入最暢銷的自學課程：{siteMeta.coreTheme.topic}入門課</p>
          <p>關掉這個視窗就沒有了，請好好把握機會！</p>
        </div>

        <div className={styles.selfStudyCourseBuyNow}>
          <div className={styles.contentWrapper}>
            <h2>{siteMeta.coreTheme.topic}入門課</h2>
            <p>幫助你把對{siteMeta.coreTheme.topic}的興趣提升為專業</p>
            <p>從零開始學習，解鎖你心中的{siteMeta.coreTheme.topic}</p>
            <a href="#" className={styles.buyButtonWrap} target="_blank" rel="noopener noreferrer">
              <span className={styles.buyButtonText}>只要 ${siteMeta.price.selfStudyCourseUpsell} (官網價的12%) 馬上加入!</span>
            </a>
          </div>
        </div>
        <BackgroundColor color="lightGreen">
          <div className={styles.problemsWrap}>
            <div className={styles.problemsContent}>
              <h2>想{siteMeta.coreTheme.topic}的你，是不是想過這些問題？</h2>
              <ul>
                {targetAudienceData.problems.map(problem => (
                  <li key={problem.id}>「{problem.text}」</li>
                ))}
              </ul>
            </div>
          </div>
        </BackgroundColor>
        <BeforeAfter data={beforeAfterData} />
      </main>
    </>
  );
}

export default Upsell;