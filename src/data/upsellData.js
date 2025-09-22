import { siteMeta } from '@data/siteMeta.js';
import { freeDownloadData } from '@data/freeDownloadData.js';
import { targetAudienceData } from './servicesPageData';

const { coreTheme, outlinks, price } = siteMeta;
const { topic } = coreTheme;
const { facebookFreeGroup, instagram } = outlinks;
const { selfStudyCourse, selfStudyCourseUpsell } = price;

export const upsellData = {
    ctaSection: {
        title: `很高興你對${topic}有興趣!`,
        paragraph01: `請馬上檢查email信箱，標題為「 ${freeDownloadData.titleLine2}」。 \n 在等待的同時，歡迎你`,
        list: [
            { id: 'c1', text: '加入', linkText: 'FB社團', linkUrl: facebookFreeGroup.url },
            { id: 'c2', text: '追蹤', linkText: 'IG', linkUrl: instagram.url },
            { id: 'c3', text: '閱讀', linkText: '文章', linkUrl: '/blog' },
        ],
        priceText: [
            {id: 'p1', text: `我提供一個本頁限定優惠，讓你可以從0到1擁有🐷🐷的基礎能力。 \n 現在你可以用NT$${selfStudyCourseUpsell}（官網價NT$${selfStudyCourse}的12%）加入最暢銷的自學課程：${topic}入門課 \n 關掉這個視窗就沒有了，請好好把握機會！`},
            {id: 'p2', text: `只要 ${selfStudyCourseUpsell} (官網價的12%) 馬上加入!`},
            {id: 'p3', text: `只有這一頁才有優惠價NT$${selfStudyCourseUpsell}（官網價NT$${selfStudyCourse}的12%）`},
        ],
    },
    buyNowSection: {
        title01: `${topic}入門課`,
        title02: '現在就是你入門🌿🌿最好的時機',
        paragraph: `幫助你把對${topic}的興趣提升為專業 \n 從零開始學習，解鎖你心中的${topic}`,
        buyLink: '#', // TODO: 請填入購買連結
    },
    targetAudienceSection: {
        title01: `想${topic}的你，是不是想過這些問題？`,
        title02: `${topic}入門課就是為你設計的，它可以幫助你`,
        imageUrl: '/images/matcha-placeholder.jpg',
        imageAlt: '抹茶奶綠',
    },
    prosSection: {
        title: '我會教你這⭐年多來，從大量實際操作🪴🪴，學到並運用在我的🪴🪴事業上，印證很有效的模式和具體方法。'
    },
    outlineSection: {
        title: '課程包括哪些內容？',
    },
    greeting: `Hi,我是${siteMeta.siteAuthorName}!`,
    aboutSection: {
        imageUrl: '/images/wagashi.jpg',
        imageAlt: '和菓子'
    }
};