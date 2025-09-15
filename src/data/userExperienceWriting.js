// 1. 整理通用、可重複使用的 CTA 按鈕文案
export const ctas = {
    freeDownload: {
        primary: '免費下載',
        secondary: '我想要...!',
        tertiary: '立即體驗！'
    },
    buy: {
        primary: '立即購買',
        secondary: '馬上加入',
    },
    bookService: {
        primary: '立即預約！',
        secondary: '我想要...！'
    },
    readMore: '閱讀更多',
    submitForm: '送出表單'
};

// 2. 整理特定元件或頁面的 UI 文字
export const contactFormContent = {
    statusMessage: {
        success: '感謝您的訊息，我們會盡快與您聯繫！',
        error: '訊息傳送失敗，請稍後再試或直接來信。',
        sending: '傳送中...'
    },
    labels: {
        name: '您的姓名',
        email: '電子郵件',
        message: '訊息內容'
    }
};
// 404 Not Found 找不到頁面訊息
export const notFoundMessages = {
    title: '404 - 這個頁面不存在。',
    prompt: '指向這裡的連結發生錯誤，請使用搜尋功能查詢其他結果。',
    homeLink: '返回首頁'
};


// 3. 整理 API / Server-side 回應訊息

export const apiMessages = {
    common: {
        forbidden: '禁止存取',
        captchaFail: 'CAPTCHA 驗證失敗',
    },
    contact: {
        success: '訊息已成功寄出',
        error: '訊息寄送時發生錯誤',
    },
    subscription: {
        success: '訂閱成功！請檢查您的信箱以確認訂閱。',
        error: '訂閱時發生錯誤',
        serverConfigError: '伺服器設定不完整',
    }
};

// 4. E-mail 樣板文字
export const emailTemplates = {
    contactNotification: {
        subjectPrefix: '來自 sakuyal.com 的新訊息 -',
        title: '來自聯絡表單的新訊息：',
        labels: {
            name: '姓名:',
            email: 'Email:',
            message: '訊息內容:'
        },
        recipientName: 'Sakuyal NLP Admin'
    }
};