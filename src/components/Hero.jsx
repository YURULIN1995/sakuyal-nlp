import styles from '@styles/Hero.module.scss';
import TextImageSlot from '@components/TextImageSlot.jsx';
import BicolorBackground from '@components/BicolorBackground.jsx';

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