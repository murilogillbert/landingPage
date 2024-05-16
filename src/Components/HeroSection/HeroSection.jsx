import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <div className={styles.hero}>
      <div className={styles.text}>
        <h1>Balas de Coco Artesanal</h1>
        <p>Com o mais puro coco</p>
      </div>
      <div className={styles.animation}></div>
    </div>
  );
}

export default HeroSection;
