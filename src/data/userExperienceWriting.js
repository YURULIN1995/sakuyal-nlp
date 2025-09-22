import { siteMeta } from '@data/siteMeta.js';

// 404 Not Found 找不到頁面訊息
export const notFoundMessages = {
    title: '404 - 這個頁面不存在。',
    prompt: '指向這裡的連結發生錯誤，請使用搜尋功能查詢其他結果。',
    homeLink: '返回首頁'
};

// Server-side 回應訊息: Cloudflare Turnstile API , Brevo Contact API, Brevo Transactional API

export const apiMessages = {
    // Cloudflare Turnstile API
    common: {
        forbidden: '禁止存取',
        captchaFail: 'CAPTCHA 驗證失敗',
    },
    // Brevo Contact API
    contact: {
        success: '訊息已成功寄出', //可客製
        error: '訊息寄送時發生錯誤', //可客製
    },
    // Brevo Transactional API
    subscription: {
        success: '訂閱成功！請檢查您的信箱以確認訂閱。', //可客製
        error: '訂閱時發生錯誤', //可客製
        serverConfigError: '伺服器設定不完整',
    }
};

// 聯絡表單 UI 文字
export const contactFormContent = {
    statusMessage: {
        success: '感謝您的訊息，我會盡快與您聯繫！', //可客製
        error: '訊息傳送失敗，請聯絡開發人員或直接來信。', //可客製
        sending: '傳送中...' //可客製
    },
    labels: {
        name: '您的姓名', //可客製，例：請問貴姓大名。
        email: '電子郵件', //可客製，例：請輸入您的Email。
        message: '訊息內容' //可客製，例：請描述您遇到的問題。
    }
};


// E-mail 樣板文字，客戶寄給管理者看的。
export const emailTemplates = {
    contactNotification: {
        subjectPrefix: 'sakuyal.com -', //請填入您自己的網域。
        title: '來自聯絡表單的新訊息：',
        labels: {
            name: '姓名:',
            email: 'Email:',
            message: '訊息內容:'
        },
        recipientName: 'Sakuyal NLP Admin' //請填寫您的官網管理員名稱，例：檸檬草祕密花園園丁
    }
};

// 整理通用、可重複使用的 CTA 按鈕文案
export const ctas = {
    about: {
        primary: '關於我',
        secondary: '了解更多'
    },
    portfolio: {
        primary: '客戶成果',
        secondary: '查看作品集'
    },
    freeDownload: {
        primary: '免費下載⇒',
        secondary: `確認送出，我想${siteMeta.coreTheme.topic}！`,
        tertiary: '立即體驗！'
    },
    buy: {
        primary: '立即購買',
        secondary: '馬上加入',
    },
    bookService: {
        primary: '立即預約！',
        secondary: '預約免費諮詢'
    },
    readMore: '閱讀更多',
    submitForm: '送出表單',
};