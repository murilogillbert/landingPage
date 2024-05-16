/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './Carousel.module.css';

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex >= images.length - 3 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex <= 0 ? images.length - 3 : prevIndex - 1));
  };

  return (
    <div className={styles.carousel}>
      <h2>Imagens das Balas de Coco</h2>
      <div className={styles.sliderWrapper}>
        <button className={styles.prevButton} onClick={prevSlide}>{'<'}</button>
        <div className={styles.slider} style={{ transform: `translateX(-${currentImageIndex * 55}%)` }}>
          {images.concat(images.slice(0, 2)).map((image, index) => (
            <img key={index} src={image} alt={`Bala de Coco ${index}`} />
          ))}
        </div>
        <button className={styles.nextButton} onClick={nextSlide}>{'>'}</button>
      </div>
    </div>
  );
}

export default Carousel;
