import React, { useState, useEffect } from 'react';
import '../styles/Slider.css';
import image1 from '../assets/image 1.png';
import image2 from '../assets/image 2.png';
import image3 from '../assets/image 3.png';

const slides = [
  {
    image: image1,
    p: 'Project Management App',
    h1: 'Collaborate and build faster, together.',
    span: 'Create, share, and get feedback with collaborative boards for rapid development.',
    button: 'Create your first task',
  },
  {
    image: image2,
    p: 'Another Project',
    h1: 'Manage efficiently',
    span: 'Keep your team organized and productive with our tools.',
    button: 'Get Started',
  },
  {
    image: image3,
    p: 'Your Next Project',
    h1: 'Plan, track, and succeed',
    span: 'Turn ideas into reality with simple, intuitive boards.',
    button: 'Start Now',
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const autoPlaySlider = () => {
      setCurrent((prevSlide) => {
        const isLastSlide = prevSlide === slides.length - 1;

        if (isLastSlide) {
          return 0;
        } else {
          return prevSlide + 1;
        }
      });
    };

    const interval = setInterval(autoPlaySlider, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToPreviousSlide = () => {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const goToNextSlide = () => {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="slider-container">
      <div
        className="slides-wrapper"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img
              src={slide.image}
              alt={`slide ${index}`}
              className="slide-image"
            />
            <div className="slide-content">
              <p className="slide-p">{slide.p}</p>
              <h1 className="slide-h1">{slide.h1}</h1>
              <span className="slide-span">{slide.span}</span>
              <button className="slide-button">{slide.button}</button>
            </div>
          </div>
        ))}
      </div>

      <div className="dots-container">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === current ? 'active-dot' : ''}`}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>

      <button className="nav-button prev-button" onClick={goToPreviousSlide}>
        ‹
      </button>
      <button className="nav-button next-button" onClick={goToNextSlide}>
        ›
      </button>
    </div>
  );
};

export default Slider;
