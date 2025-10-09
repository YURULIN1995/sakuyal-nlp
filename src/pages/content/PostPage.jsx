import styles from '@styles/PostPage.module.scss';
import OneColumnLayout from '@components/OneColumnLayout';


function PostPage() {
    return(
        <>
        <div className={styles.transparentTop}></div>
        <div className={styles.container}>
            <OneColumnLayout className={styles.content}>
                <div>
                    <h1>打造5倍高留客率AI的個3大關鍵思維</h1>
                    <h2>01:釐清「人性化」終點：你的AI是在服務人，還是取代人？</h2>
                    <p>3大原則</p>
                    <h3>原則1：<strong>真實性 &gt; 偽裝</strong></h3>
                    <p>與其用預錄影片假裝是直播研討會 ，不如大方承認這是「可隨時觀看的線上工作坊」，並利用 AI 在問答環節協助分類問題、或在使用者註冊後，根據他的興趣推薦特定段落。<strong>誠實的AI，比虛偽的真人更能贏得信賴。</strong></p>
                    <h3>原則2：<strong>有效性 &gt; 即時性</strong></h3>
                    <p>客戶要的不是一個24小時回覆罐頭訊息 的機器人，而是一個能<strong>真正解決問題</strong>的管道。AI 的首要任務應該是精準判斷問題，如果無法獨立解決，就應清楚地告知使用者「我已將您的問題轉交給課程顧問/技術專家，我們會在N小時內回覆您」，而不是用無效的答案鬼打牆 。這能有效管理客戶期待，避免因無效溝通而流失。</p>
                    <h3>原則3：<strong>可靠性 &gt; 創造性</strong></h3>
                    <p>對於資訊型產品，客服 AI 絕不能隨意產生它不確定的答案 。例如，當被問到「請問老師的A課程和B課程有什麼不同？」時，AI 如果無法根據資料回答，寧可說「這是一個好問題，我需要請課程顧問為您做更詳細的比較」，也絕不能自己「創造」一個不存在的優惠方案或課程內容。<strong>一次無法兌現的承諾，就足以永久摧毀客戶的信賴。</strong></p>
                    <h2>02:為何你的AI總是被封鎖？用「逐步實驗」打造客戶願意一再互動的AI</h2>
                </div>
            </OneColumnLayout>
            <div className={styles.widget}></div>
        </div>
        
        </>
    );
}
export default PostPage;