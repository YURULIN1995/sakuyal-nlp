import SEO from '@components/Head/SEO';
// import SubscriptionForm from '@components/SubscriptionForm';
import BicolorBackground from '@components/BicolorBackground.jsx';

function FreeDownload() {
    return(
        <>
            <SEO/>
            <BicolorBackground>
                <h1>免費領取您的 [贈品名稱]！</h1>
                <p>只要輸入您的姓名與 Email，我們就會立刻將下載連結寄到您的信箱。</p>
            </BicolorBackground>
            {/* 在這裡使用元件，並傳入您教材購買頁的路徑 */}
            {/* <SubscriptionForm onSuccessRedirectTo="/course/buy-now" /> */}
        </>
    );
}
export default FreeDownload;