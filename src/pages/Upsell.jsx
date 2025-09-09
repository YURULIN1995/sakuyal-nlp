import SEO from '@components/Head/SEO';
import styles from '@styles/Upsell.module.scss';
import BackgroundColor from '@components/BackgroundColor';
import TestimonialCarousel from '@components/Testimonials/TestimonialCarousel';
import BeforeAfter from '@components/BeforeAfter';
import IconCheck from '@assets/icons/check.svg?react';
import IconChevronRight from '@assets/icons/chevron-right.svg?react';
import { siteMeta } from '@data/siteMeta.js';
import { freeDownloadData } from '@data/freeDownloadData.js';
import { targetAudienceData } from '@data/servicesPageData.js';
import { selfStudyCourseTestimonials, selfStudyCourseData, selfStudyCourseFaq, selfStudyCourseBeforeAfterData } from '@data/selfStudyCourseData.js';
import Faq from '@components/Faq';
import Button from '@components/Button';

function Upsell() {
  const { title, description } = siteMeta.pages.upsell;
  const {faqTitle, questionStacks} = selfStudyCourseFaq;
  const buy = siteMeta.ctaList.buy;
  const { name: testimonialTitle, list: testimonialList } = selfStudyCourseTestimonials;


  return (
    <>
      <SEO title={title} description={description} />
      <main className={styles.main}>
        <div className={styles.callToActionHead}>
          <h2>很高興你對{siteMeta.coreTheme.topic}有興趣!</h2>
          <p>請馬上檢查email信箱，標題為「 {freeDownloadData.titleLine2}」</p>
          <p>在等待的同時，歡迎你</p>
          <ul>
            <li>加入<a href={siteMeta.outlinks.facebookFreeGroup.url}>{siteMeta.outlinks.facebookFreeGroup.name}</a></li>
            <li>追蹤<a href={siteMeta.outlinks.instagram.url}>{siteMeta.outlinks.instagram.name}</a></li>
            <li>閱讀<a href="/blog">文章</a></li>
          </ul>
          <p>我提供一個本頁限定優惠，讓你可以從0到1擁有🐷🐷的基礎能力。</p>
          <p>現在你可以用NT${siteMeta.price.selfStudyCourseUpsell}（官網價NT${siteMeta.price.selfStudyCourse}的12%）加入最暢銷的自學課程：{siteMeta.coreTheme.topic}入門課</p>
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
                {targetAudienceData.problems.map(problem => problem && problem.text &&(
                  <li key={problem.id}>「{problem.text}」</li>
                ))}
              </ul>
            </div>
          </div>
        </BackgroundColor>
        <BackgroundColor className={styles.courseHelp} color="white">
          <div className={styles.containerNoGap}>
            <div className={styles.courseImage}>
              <img src="/images/matcha-placeholder.jpg" alt="抹茶奶綠" />
            </div>
            <div className={styles.courseHelpContainer}>
              <h2>{siteMeta.coreTheme.topic}入門課就是為你設計的，它可以幫助你</h2>
              <ul className={styles.courseHelpList}>
                {targetAudienceData.effects.map(effect => effect && effect.text &&(
                  <li key={effect.id}>{effect.text}</li>
                  ))}
              </ul>

            </div>
          </div>
        </BackgroundColor>
        <BackgroundColor color="lightGreen" className={styles.pros}>
          <div className={styles.prosContentWrap}>
            <h2>我會教你這⭐年多來，從大量實際操作🪴🪴，學到並運用在我的🪴🪴事業上，印證很有效的模式和具體方法。</h2>
            <ul className={styles.prosList}>
              {targetAudienceData.pros.map(pro => pro && pro.text && (
              <li key={pro.id}><IconCheck/>{pro.text}</li>
              ))}
            </ul>
          </div>
        </BackgroundColor>
        <BackgroundColor color="white" className={styles.testimonials}>
          <TestimonialCarousel name={testimonialTitle} testimonials={testimonialList} />
        </BackgroundColor>
        <BeforeAfter data={selfStudyCourseBeforeAfterData} />
        <BackgroundColor color="white" className={styles.outline}>
          <div className={styles.outlineTitle}>
            <h2>課程包括哪些內容？</h2>
          </div>
          <div className={styles.outlineContentFlexWrap}>
            {selfStudyCourseData.chapterLists && selfStudyCourseData.chapterLists.map((chapter, index) => (
              <div className={styles.chapterBlock} key={chapter.id}>
                <div className={styles.chapterTitle}>
                  <h2>第 {index + 1} 單元<br/>{chapter.title}</h2>
                  <div className={styles.outlineDividerContainer}></div>
                </div>
                <div className={styles.chapterIntro}>
                  <p className={styles.chapterBrief}>{chapter.briefIntro || chapter.breifIntro}</p>
                  <ul>
                    {chapter.items && chapter.items.map(item => (
                      item && item.text && (
                      <li key={item.id}>{item.text}</li>
                    )
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {selfStudyCourseData.appendixLists && selfStudyCourseData.appendixLists.map((appendix, index) => (
              <div className={styles.chapterBlock} key={appendix.id}>
                <div className={styles.chapterTitle}>
                  <h2>附錄 {index + 1} <br/>{appendix.title}</h2>
                  <div className={styles.outlineDividerContainer}></div>
                </div>
                <div className={styles.chapterIntro}>
                  <p className={styles.chapterBrief}>{appendix.briefIntro || appendix.breifIntro}</p>
                  <ul>
                    {appendix.items && appendix.items.map(item => (
                      item && item.text && (
                      <li key={item.id}>{item.text}</li>
                    )
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </BackgroundColor>
        <BackgroundColor color="freshGreen" className={styles.about}>
          <div className={styles.aboutContentWrap}>
            <div className={styles.aboutImage}>
              <img src="/images/wagashi.jpg" alt="和菓子" />
            </div>
            <div className={styles.aboutText}>
              <h2>Hi! 我是🐷🐷</h2>
              <p>我是個有💐年經驗的🌿🌿🌿🌿🌿🌿🌿也是一個🐷🐷培訓教練，曾在🪴🪴🪴🪴從事☘️☘️☘️☘️，在工作中最喜歡🌱的部分，因此開始🌷🌷🌷🌷🌷🌷。</p>
              <p>我已經幫助🌼位學生從零開始☘️☘️☘️☘️生涯，許多人成功轉職或開始接案，即使他們沒有相關🎍🎍背景或從來沒有學過🌹🌹🌹🌹。</p>
              <p>我能為你提供清晰的步驟和技巧，幫助你節省大量摸索、試錯的時間。幫助想要入門🪻🪻🪻🪻🪻的你，將你的興趣轉為專業，有機會從事夢想中的工作。</p>
              <div className={styles.aboutLogoWrap}>
                <img src="/images/logo/sakuyal_logo_transparent_47x63.svg" alt="sakuyal-nlp logo" />
              </div>
            </div>
          </div>
        </BackgroundColor>
        <BackgroundColor color="white" className={styles.selfStudyCourseFaqWrap}>
          <div className={styles.decorativeImage}>
            <img src="/images/matcha-02.jpg" alt="" />
          </div>
          <Faq className={styles.selfStudyCourseFaq} title={faqTitle} items={questionStacks}/>
        </BackgroundColor>
        <BackgroundColor color="freshGreen" className={styles.callToActionBanner}>
          <div className={styles.callToActionBannerWrap}>
            <div className={styles.callToActionBannerContent}> 
              <h2>現在就是你入門🌿🌿最好的時機</h2>
                <ul>
                  {selfStudyCourseData.content && selfStudyCourseData.content.map(content => (
                  <li id={content.id}><IconCheck/>{content.text}</li>
                  ))}
                </ul>              
              <p>只有這一頁才有優惠價NT${siteMeta.price.selfStudyCourseUpsell}（官網價NT${siteMeta.price.selfStudyCourse}的12%）</p>
            </div>
            <Button className={styles.buyButton}text={buy.name02} link="#" endIcon={<IconChevronRight/>}/>
          </div>
        </BackgroundColor>
      </main>
    </>
  );
}

export default Upsell;