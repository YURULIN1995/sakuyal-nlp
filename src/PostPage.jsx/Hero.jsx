import styles from '@styles/Hero.module.scss';
import TextImageSlot from '@/PostPage.jsx/TextImageSlot.jsx';
import BicolorBackground from '@/PostPage.jsx/BicolorBackground.jsx';

function Hero(props) {
  return (
    <BicolorBackground className={styles.heroSection}>
      
      <TextImageSlot
        {...props}
        layoutClassName={styles.heroContainerSpecifics}
        textContainerLayoutClassName={styles.heroTextContainerMobile}
        imageContainerLayoutClassName={styles.heroImageContainerMobile}
      />
    </BicolorBackground>
  );
}

export default Hero;