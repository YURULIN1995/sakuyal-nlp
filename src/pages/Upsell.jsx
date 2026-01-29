import SEO from '@components/SEO';
import styles from '@styles/Upsell.module.scss';
import BackgroundColor from '@components/BackgroundColor';
import BeforeAfter from '@components/BeforeAfter';
import IconCheck from '@assets/icons/check.svg?react';
import IconChevronRight from '@assets/icons/chevron-right.svg?react';
import SelfStudyCourseTestimonial from '@components/SelfStudyCourseTestimonial';
import { siteMeta } from '@data/siteMeta.js';
import { upsellData } from '@data/upsellData.js';
import { ctas } from '@data/userExperienceWriting.js';
import { freeDownloadData } from '@data/freeDownloadData.js';
import { targetAudienceData } from '@data/servicesPageData.js';
import { authorData } from '@data/aboutData.js';
import { selfStudyCourseData, selfStudyCourseFaq, selfStudyCourseBeforeAfterData } from '@data/selfStudyCourseData.js';
import Faq from '@components/Faq';
import Button from '@components/Button';
import ScrollToTopButton from '@components/ScrollToTopButton';

function Upsell() {
  const { logoUrl, siteName, coreTheme, outlinks, price, pages } = siteMeta;
  const { topic } = coreTheme;
  const { facebookFreeGroup, instagram } = outlinks;
  const { selfStudyCourseUpsell, selfStudyCourse } = price;
  const { title, description } = pages.upsell;
  const {faqTitle, questionStacks} = selfStudyCourseFaq;
  const buy = ctas.buy;
  const { ctaSection, buyNowSection, targetAudienceSection, prosSection, outlineSection, greeting, aboutSection } = upsellData;


  return (
    <>
      <SEO title={title} description={description} />
      <main className={styles.main}>
        <div className={styles.callToActionHead}>
          <h2>{ctaSection.title}</h2>
          <p>{ctaSection.paragraph01}</p>
          <ul>
            {ctaSection.list.map(item => (
              <li key={item.id}>
                {item.text}
                <a href={item.linkUrl}>{item.linkText}</a>
              </li>
            ))}
          </ul>
          <p>{ctaSection.priceText[0].text}</p>
        </div>

        <div className={styles.selfStudyCourseBuyNow}>
          <div className={styles.contentWrapper}>
            <h2>{buyNowSection.title01}</h2>
            <p>{buyNowSection.paragraph}</p>
            <a href={buyNowSection.buyLink} className={styles.buyButtonWrap} targparagraph02et="_blank" rel="noopener noreferrer">
              <span className={styles.buyButtonText}>{ctaSection.priceText[1].text}</span>
            </a>
          </div>
        </div>
        <BackgroundColor color="lightGreen">
          <div className={styles.problemsWrap}>
            <div className={styles.problemsContent}>
              <h2>{targetAudienceSection.title01}</h2>
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
              <img src={targetAudienceSection.imageUrl} alt={targetAudienceSection.imageAlt} />
            </div>
            <div className={styles.courseHelpContainer}>
              <h2>{targetAudienceSection.title02}</h2>
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
            <h2>{prosSection.title}</h2>
            <ul className={styles.prosList}>
              {targetAudienceData.pros.map(pro => pro && pro.text && (
              <li key={pro.id}><IconCheck/>{pro.text}</li>
              ))}
            </ul>
          </div>
        </BackgroundColor>
        <BackgroundColor color="white" className={styles.testimonials}>
          <SelfStudyCourseTestimonial/>
        </BackgroundColor>
        <BeforeAfter data={selfStudyCourseBeforeAfterData} />
        <BackgroundColor color="white" className={styles.outline}>
          <div className={styles.outlineTitle}>
            <h2>{outlineSection.title}</h2>
          </div>
          <div className={styles.outlineContentFlexWrap}>
            {selfStudyCourseData.chapterLists && selfStudyCourseData.chapterLists.map((chapter, index) => (
              <div className={styles.chapterBlock} key={chapter.id}>
                <div className={styles.chapterTitle}>
                  <h2>{chapter.title}</h2>
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
                  <h2>{appendix.title}</h2>
                  <div className={styles.outlineDividerContainer}></div>
                </div>
                <div className={styles.chapterIntro}>
                  <p className={styles.chapterBrief}>{appendix.breifIntro || appendix.breifIntro}</p>
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
              <img src={aboutSection.imageUrl} alt={aboutSection.imageAlt} />
            </div>
            <div className={styles.aboutText}>
              <h2>{greeting}</h2>
              <p>{authorData.paragraph}</p>
              <div className={styles.aboutLogoWrap}>
                <img src={logoUrl} alt={`${siteName} logo`} />
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
              <h2>{buyNowSection.title02}</h2>
                <ul>
                  {selfStudyCourseData.content && selfStudyCourseData.content.map(content => (
                  <li id={content.id}><IconCheck/>{content.text}</li>
                  ))}
                </ul>              
              <p>{ctaSection.priceText[2].text}</p>
            </div>
            <Button className={styles.buyButton} text={buy.secondary} to={buyNowSection.buyLink} endIcon={<IconChevronRight/>}/>
          </div>
        </BackgroundColor>
      </main>
      <ScrollToTopButton />
    </>
  );
}

export default Upsell;